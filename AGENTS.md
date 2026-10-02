# AGENTS.md

AI コーディングエージェント向けのリポジトリガイド。`CLAUDE.md` はこのファイルを読み込むだけの薄いラッパー。

## 前提: このリポジトリは public

- コミット・PR 本文・コメント・ログ出力・ドキュメントに、意図しない機密情報（API トークン、Cloudflare Account ID、Zone ID、内部 URL、ローカルの絶対パス、`.env` の中身、`cf auth login` で得た認証情報など）を含めない。値が必要な設定は GitHub Secrets / Cloudflare 側で管理し、リポジトリには参照（`${{ secrets.X }}` など）だけを書く。
- サイトに載る個人情報（CV など）は本人が公開している範囲のもの。新たな個人情報や第三者の情報を追加・推測で補完しない。
- 倫理に反する変更（第三者を欺くコンテンツ、なりすまし、トラッキングの無断追加、セキュリティ設定の意図しない緩和など）は行わない。判断に迷う場合は実装前にユーザーへ確認する。

## コマンド

ツールチェーンは mise（node / Vite+ の `vp` / actionlint / ghalint）+ pnpm（`devEngines` で固定、`vp` 経由で実行）。

```sh
mise install          # node, vp, actionlint, ghalint
vp env on pnpm
vp install            # 依存インストール

vp run dev            # = cf dev（ローカル開発サーバー）
vp check              # fmt (oxfmt) + lint (oxlint, type-aware + typecheck)。CI と同じ
vp run build          # = cf build（Build Output を生成）
vp run deploy         # = cf deploy（build + Cloudflare へアップロード。要 `vp exec cf auth login`）

actionlint            # workflow を変更したとき
ghalint run && ghalint act
```

テストスイートは存在しない。変更の検証は `vp check` と `vp run build` が通ること（CI の `test.yaml` と同一）。

## アーキテクチャ

- **Astro 静的サイト**（`output: "static"`）。ページは `src/pages/`（トップ `index.astro`、`cv/ja.astro`・`cv/en.astro`）。React コンポーネントは `client:load` でクライアント側ハイドレーションする島のみ。
  - トップの Blog 欄（`src/components/top/Blog.tsx`）はビルド時ではなく **ブラウザから** はてなブログの RSS（`src/config.ts` の `BLOG_RSS`）を fetch して描画する。
  - CV は本文をリポジトリに持たず、`ReactEmbedGist` で GitHub Gist を実行時に埋め込む。CV の内容変更は Gist 側で行う。
  - Google Analytics（gtag, `src/components/BaseHead.astro`）は `@astrojs/partytown` で Web Worker 実行（`dataLayer.push` を forward）。
- **Cloudflare Workers（静的アセットのみ）にデプロイ**。`cf` CLI v1（beta）を使い、設定は `wrangler.toml` ではなく `cloudflare.config.ts`（`cf/config` の `defineConfig`）。
  - `astro.config.mjs` で `@cloudflare/vite-plugin` を `assetsOnly: true` で使う。このプラグインはクライアントビルド（`_astro/`, `public/`）しか Build Output に書かないため、自作 integration `cloudflareStaticPages` が `astro:build:done` で `@cloudflare/build-output-utils` の `writeAssets` を呼び、prerender 済みページを `dist/` から合流させている。ビルド構成を触るときはこの二段構成を壊さないこと。
  - レスポンスヘッダは `public/_headers`。
  - カスタムドメイン（`domains`）は zone の Cloudflare 移管待ちで未設定（`cloudflare.config.ts` の TODO）。`www` → apex のリダイレクトは `_redirects` ではなく zone レベルの Redirect Rule で行う想定。
- **Vite+**（`vite-plus`）: `vite` は pnpm catalog で `@voidzero-dev/vite-plus-core` にエイリアスされている。lint ルール `vite-plus/prefer-vite-plus-imports` が有効なので、`vite` からの import は `vite-plus` に寄せる。`vite-plus` / `@voidzero-dev/*` / `mise.toml` の `vp` は同じバージョンで揃える（Renovate でもグループ化済み）。
- `pnpm-workspace.yaml` の `minimumReleaseAge`（3 日）でサプライチェーン対策をしている。Cloudflare / Vite+ 系など意図的に除外しているパッケージ以外を除外リストに追加しない。

## GitHub Actions と Cloudflare の認可

- workflow:
  - `test.yaml`: PR / `main` push で `vp check` + `vp run build`。
  - `deploy.yaml`: `main` push（と `workflow_dispatch`）で `vp run deploy`。GitHub Environment `prd` の Secrets `CLOUDFLARE_API_TOKEN` / `CLOUDFLARE_ACCOUNT_ID` を使う。
  - `action-lint.yaml`: workflow 変更時に actionlint（reviewdog）+ ghalint。
  - PR ごとの preview デプロイ workflow は現状ない。
- workflow の規約（ghalint で強制）: トップレベル `permissions: {}` + job ごとに最小権限、`timeout-minutes` 必須、action は commit SHA で pin（バージョンはコメント）、`actions/checkout` は `persist-credentials: false`（例外は `ghalint.yaml` に理由付きで明記）。
- **Cloudflare の新しい機能を使う場合（新規 binding、KV / R2 / D1 / Queues、Workers 本体のコード、Custom Domain / Routes、Preview URL / versions upload など）は、ローカルで動いても CI で失敗し得る。** 実装時に必ず以下を確認し、ユーザーに必要な作業として明示すること:
  - GitHub Secrets の `CLOUDFLARE_API_TOKEN` に、その機能に必要な権限（例: Workers KV Storage / R2 / D1 の Edit、Zone 単位の Workers Routes や DNS など）が付与されているか。トークンの権限変更は Cloudflare ダッシュボードでユーザーが行う必要があり、エージェントからは確認できない。
  - deploy（`prd` Environment）だけでなく、preview 用 workflow を追加する場合はその job が使う Environment / Secrets と、fork からの PR では Secrets が渡らない点（`pull_request_target` で安易に回避しない）。
  - GitHub 側の `permissions`（PR へのコメントで preview URL を返すなら `pull-requests: write` など）を必要最小限で追加したか。
  - 新しい Secret / 変数を増やす場合は、その名前と用途を PR 本文に書き、値は書かない。
