import * as functions from 'firebase-functions';
import * as express from 'express';
import {Teto} from './linebot/teto';
import {linebotMiddleware} from './linebot/middleware';
import {LineBotTetoConfig} from './config';
import {Client, ClientConfig} from '@line/bot-sdk';

const tetoClientConfigConfig: ClientConfig = {
  channelAccessToken: LineBotTetoConfig.channelAccessToken,
};

const tetoClient = new Client(tetoClientConfigConfig);
const tetoMiddleware = linebotMiddleware(LineBotTetoConfig.channelSecret);

const apiApp = express();
apiApp.post('/api/linebot/teto', tetoMiddleware, (req, res) => {
  const teto = new Teto(tetoClient);
  teto.handle(req.body.events)
    .then(result => res.send(result))
    .catch(() => console.error('failed to handle linebot tet request'));
});

export const api = functions.https.onRequest(apiApp);
