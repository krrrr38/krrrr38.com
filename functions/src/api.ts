import * as express from 'express';
import {Teto} from './application/linebot/teto';
import {linebotMiddleware} from './application/linebot/middleware';
import {LineBotTetoConfig,SlackBotMoonConfig} from './config';
import {Client, ClientConfig} from '@line/bot-sdk';
import {rawBodySaver, slackUrlEncodedMiddleware} from './application/slackbot/middleware';
import {Moon} from './application/slackbot/moon';
import {slackSlashCommand} from './application/slackbot/slack-response';
import Router from 'express-promise-router'

const slackBotMoon = new Moon();

const lineBotTetoClientConfigConfig: ClientConfig = {
  channelAccessToken: LineBotTetoConfig.channelAccessToken,
};
const lineBotTetoMiddleware = linebotMiddleware(LineBotTetoConfig.channelSecret);
const lineBotTetoClient = new Client(lineBotTetoClientConfigConfig);
const lineBotTeto = new Teto(lineBotTetoClient);

const router = Router();
router.get('/api/health', (req: express.Request, res: express.Response) => {
  res.send("hello");
});
router.get('/api/my', (req: express.Request, res: express.Response) => {
  res.send("hello");
});
router.post(
  '/api/slackbot/moon/slash',
  rawBodySaver,
  slackUrlEncodedMiddleware(SlackBotMoonConfig.appSigningSecret),
  slackSlashCommand(async (req, res) => {
    const body = await slackBotMoon.handle(req);
    res.send(body);
  })
);
router.post('/api/linebot/teto', lineBotTetoMiddleware, (req, res) => {
  lineBotTeto.handle(req.body.events)
    .then(result => res.send(result))
    .catch(() => console.error('failed to handle linebot tet request'));
});

const apiApp = express();
apiApp.use(router);

if (process.env.RUN_API_SERVER) {
  const server = apiApp.listen(3000, () => {
    console.log("Node.js is listening to PORT:" + server.address());
  });
}

export default apiApp;
