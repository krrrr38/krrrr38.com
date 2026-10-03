# AGENTS.md

## 注意

- public リポジトリ。トークン・Account ID・`.env`・ローカルパスなどの機密情報や、公開されていない個人情報をコミット/PR/ログに含めない。倫理に反する変更はしない。
- Cloudflare の新しい機能（binding、KV/R2/D1、Custom Domain、Preview 等）を使う場合、GitHub Actions の preview/deploy で使う `CLOUDFLARE_API_TOKEN` の権限追加や Secrets・`permissions` の変更が必要になり得る。ユーザーに確認すべき作業として明示すること。

## コマンド

```sh
vp install      # 依存インストール（mise install 済み前提）
vp run dev      # ローカル開発
vp check        # fmt + lint + typecheck
vp run build    # ビルド
```

テストはなく、`vp check` と `vp run build` が CI と同じ検証。

## 構成

- Vite + React（SPA）を `cf` CLI で Cloudflare Workers（静的アセットのみ）へデプロイ。設定は `cloudflare.config.ts`。
- SPA フォールバックは `assets.notFoundHandling: "single-page-application"`。将来 Hono を足すときは `runWorkerFirst: ["/api/*"]` を併用する想定。
- `main` への push で `.github/workflows/deploy.yaml` がデプロイする。
- workflow は ghalint の規約に従う（最小 `permissions`、SHA pin、`persist-credentials: false`）。
