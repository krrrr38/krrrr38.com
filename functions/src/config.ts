import * as functions from 'firebase-functions'

// require
// direnv edit .
// FIREBASE_SERVICE_ACCOUNT='{"type":"", ...}'
// FIREBASE_DATABASE_URL='https://dev-krrrr38.firebaseio.com'

// for production
// firebase -P prod functions:config:set app.version=version
// firebase -P prod functions:config:set linebot.teto.token=${CHANNEL_ACCESS_TOKEN}
// firebase -P prod functions:config:set linebot.teto.secret=${CHANNEL_SECRET}
// firebase -P prod functions:config:set slackbot.moon.app_signing_secret=${SLACK_APP_SIGNING_SECRET}
// firebase -P prod functions:config:set slackbot.moon.app_signing_secret=${SLACK_APP_SIGNING_SECRET}
// firebase -P prod functions:config:set fb.service_account=${FIREBASE_SERVICE_ACCOUNT}
// firebase -P prod functions:config:set fb.database_url=${FIREBASE_DATABASE_URL}

interface FirebaseServiceAccount {
  type: string
  projectId: string
  private_key_id: string
  privateKey: string
  clientEmail: string
  client_id: string
  auth_uri: string
  token_uri: string
  auth_provider_x509_cert_url: string
  client_x509_cert_url: string
}

const loadEnvOrFunctionConfig = (env: string, f: (c: functions.config.Config) => any): any => {
  const value = process.env[env]
  if (value) {
    return value
  } else {
    return f(functions.config())
  }
}

export const AppConfig = {
  version: functions.config().app.version
}

export const LineBotTetoConfig = {
  channelAccessToken: functions.config().linebot.teto.token,
  channelSecret: functions.config().linebot.teto.secret
}

// https://api.slack.com/apps/A9LQENX09/general?
export const SlackBotMoonConfig = {
  // App Credentials -> Signing Secret
  appSigningSecret: functions.config().slackbot.moon.app_signing_secret
}

export const FirebaseConfig = {
  serviceAccountJson: JSON.parse(
    loadEnvOrFunctionConfig('FIREBASE_SERVICE_ACCOUNT', (c: functions.config.Config) => {
      return JSON.stringify(c.fb.service_account)
    })
  ) as FirebaseServiceAccount,
  databaseURL: loadEnvOrFunctionConfig('FIREBASE_DATABASE_URL', c => {
    return c.fb.database_url
  })
}
