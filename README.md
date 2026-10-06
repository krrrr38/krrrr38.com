# krrrr38.com

## Setup

```sh
mise install
vp env on pnpm
```

## site

```sh
cd site
vp install
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

Cloudflare settings managed by Terraform. [tfaction](https://suzuki-shunsuke.github.io/tfaction/docs/) runs `plan` on pull requests and `apply` on merge.
