# krrrr38

## Setup

- initial setup

```sh
> vue create krrrr38 // TypeScript, vuex, router, TSLint, SASS
> firebase init // functions, hosting, firestore
```

## Firebase Service Account

- local: https://console.firebase.google.com/project/dev-krrrr38/settings/iam?hl=ja
- prod: https://console.firebase.google.com/project/prod-krrrr38/settings/iam?hl=ja

## Development

firebase-tools

```sh
> yarn global add firebase-tools --ignore-engines
```

- hosting

```sh
> nvm use
> yarn install
> yarn serve // open http://localhost:5000
```

- functions

```sh
> cd functions
> # setup direnv
> direnv edit # (see config.ts)
> yarn run api // curl -i http://localhost:3000/api/health
```

## Deploy

```sh
> npm run deploy
```

## Tips

```
firebase functions:config:set service_account="$(cat service-account.json)"
```
