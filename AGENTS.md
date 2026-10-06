# AGENTS.md

## 注意

- public リポジトリ。トークン・Account ID・`.env`・ローカルパスなどの機密情報や、公開されていない個人情報をコミット/PR/ログに含めない。倫理に反する変更はしない。
- Cloudflare の新しい機能を使う場合、`CLOUDFLARE_API_TOKEN` の権限追加や Secrets・`permissions` の変更が必要になり得る。ユーザーに確認すること。

## コマンド

`site/` で実行する。

```sh
vp install      # 依存インストール（mise install 済み前提）
vp run dev      # ローカル開発
vp check        # fmt + lint + typecheck
vp run build    # ビルド
```

テストはなく、`vp check` と `vp run build` が CI と同じ検証。`infra/` は `terraform fmt -check` と `terraform validate`。

## 構成

- `site/`: Vite + React（SPA）を `cf` CLI で Cloudflare Workers（静的アセットのみ）へデプロイ。設定は `site/cloudflare.config.ts`。
- `infra/`: Cloudflare のゾーン設定を管理する Terraform。Worker 本体は `cf` CLI の管轄。ID 類は直書きせず data source で引く。
- `main` への push で `deploy.yaml` が `site/` をデプロイし、tfaction が `infra/` を apply する（Pull Request では plan）。
- workflow は ghalint の規約に従う（最小 `permissions`、SHA pin、`persist-credentials: false`）。
