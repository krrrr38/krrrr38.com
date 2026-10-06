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

テストはなく、`vp check` と `vp run build` が CI と同じ検証。

`infra/` は `terraform fmt -check` と `terraform init -backend=false && terraform validate` で検証する。`plan` は tfstate（R2）と API トークンが必要なので CI に任せる。

## 構成

- `site/`: Vite + React（SPA）を `cf` CLI で Cloudflare Workers（静的アセットのみ）へデプロイ。設定は `site/cloudflare.config.ts`。
- `infra/`: Cloudflare のゾーン設定（DNS・Redirect Rule・ゾーン設定・Web Analytics）を管理する Terraform。Worker 本体と Custom Domain は `cf` CLI の管轄なので Terraform では管理しない。
- `main` への push で `.github/workflows/deploy.yaml` が `site/` をデプロイし、`.github/workflows/terraform-apply.yaml` が `infra/` を apply する。Pull Request では tfaction（`tfaction-root.yaml`）が plan をコメントする。
- public リポジトリなので Zone ID・Account ID・リソース ID は Terraform に直書きせず data source で引く。
- workflow は ghalint の規約に従う（最小 `permissions`、SHA pin、`persist-credentials: false`）。
