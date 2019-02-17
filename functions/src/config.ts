import * as functions from 'firebase-functions';

// require
// firebase functions:config:set linebot.teto.token=${CHANNEL_ACCESS_TOKEN}
// firebase functions:config:set linebot.teto.secret=${CHANNEL_SECRET}
// firebase functions:config:set slackbot.moon.app_signing_secret=${SLACK_APP_SIGNING_SECRET}
// firebase functions:config:get > .runtimeconfig.json

// for production
// firebase -P prod functions:config:set linebot.teto.token=${CHANNEL_ACCESS_TOKEN}
// firebase -P prod functions:config:set linebot.teto.secret=${CHANNEL_SECRET}
// firebase -P prod functions:config:set slackbot.moon.app_signing_secret=${SLACK_APP_SIGNING_SECRET}

export const LineBotTetoConfig = {
  channelAccessToken: functions.config().linebot.teto.token,
  channelSecret: functions.config().linebot.teto.secret,
};

// https://api.slack.com/apps/A9LQENX09/general?
export const SlackBotMoonConfig = {
  // App Credentials -> Signing Secret
  appSigningSecret: functions.config().slackbot.moon.app_signing_secret
};
