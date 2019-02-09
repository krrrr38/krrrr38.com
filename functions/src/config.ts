import * as functions from 'firebase-functions';

// require
// firebase functions:config:set linebot.teto.token=${CHANNEL_ACCESS_TOKEN}
// firebase functions:config:set linebot.teto.secret=${CHANNEL_SECRET}
// firebase functions:config:get > .runtimeconfig.json

export const LineBotTetoConfig = {
  channelAccessToken: functions.config().linebot.teto.token,
  channelSecret: functions.config().linebot.teto.secret,
};
