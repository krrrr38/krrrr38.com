# krrrr38.com

- `site/`: Vite + React の SPA。`cf` CLI で Cloudflare Workers へデプロイする。
- `infra/`: Cloudflare のゾーン設定を管理する Terraform。

## Setup

```sh
mise install
vp env on pnpm
cd site && vp install
```

## site

```sh
cd site
vp run dev
vp check
```

### Deploy

```sh
vp exec cf auth login
vp run deploy
```

or merge into default branch.

## infra

DNS レコード・Redirect Rule・ゾーン設定・Web Analytics を管理する。Worker 本体（スクリプト・Custom Domain・Observability）は `site/cloudflare.config.ts` の管轄。

Pull Request で [tfaction](https://suzuki-shunsuke.github.io/tfaction/docs/) が `terraform plan` の結果をコメントし、default branch へのマージで `terraform apply` する。

### 初期設定

1. Cloudflare で R2 を有効化し、tfstate 用の bucket `krrrr38-com-tfstate` を作成する。
2. その bucket に対する R2 API トークン（Object Read & Write）を作成する。
3. Terraform 用の Cloudflare API トークンを plan 用と apply 用に作成する。

   | Permission                      | plan 用 | apply 用                             |
   | ------------------------------- | ------- | ------------------------------------ |
   | Zone / Zone                     | Read    | Read                                 |
   | Zone / DNS                      | Read    | Write                                |
   | Zone / Zone Settings            | Read    | Write                                |
   | Zone / Dynamic URL Redirects    | Read    | Write                                |
   | Account / Account Settings      | Read    | Read（Web Analytics の変更時は Write） |

4. GitHub の Environment `terraform-plan` と `terraform-apply` を作成し、それぞれに以下を登録する。`terraform-apply` は default branch のみに制限する。

   | 種別     | 名前                    | 値                       |
   | -------- | ----------------------- | ------------------------ |
   | Secret   | `CLOUDFLARE_API_TOKEN`  | 3 のトークン             |
   | Secret   | `R2_ACCESS_KEY_ID`      | 2 の Access Key ID       |
   | Secret   | `R2_SECRET_ACCESS_KEY`  | 2 の Secret Access Key   |
   | Variable | `CLOUDFLARE_ACCOUNT_ID` | Cloudflare の Account ID |

### ローカルで plan する

```sh
cd infra
export CLOUDFLARE_API_TOKEN=...
export AWS_ACCESS_KEY_ID=... AWS_SECRET_ACCESS_KEY=...
export AWS_ENDPOINT_URL_S3=https://<ACCOUNT_ID>.r2.cloudflarestorage.com
terraform init
terraform plan
```
