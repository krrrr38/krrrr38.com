# krrrr38

## Setup

- initial setup

```sh
> vue create krrrr38 // TypeScript, vuex, router, TSLint, SASS
> firebase init // functions, hosting, firestore
```

## Development

- hosting

```sh
> nvm use
> yarn install
> yarn serve // open http://localhost:5000
```

- functions
```sh
> cd functions
> nvm use // Cloud Functions support node version
> yarn serve // curl -i http://localhost:5000/dev-krrrr38/us-central1/api/api/health
```

## Deploy

```sh
> npm run deploy
```
