import * as express from 'express'
import { Teto } from './application/linebot/teto'
import { linebotMiddleware } from './application/linebot/middleware'
import { AppConfig, LineBotTetoConfig, SlackBotMoonConfig, FirebaseConfig } from './config'
import { Client, ClientConfig } from '@line/bot-sdk'
import { rawBodySaver, slackUrlEncodedMiddleware } from './application/slackbot/middleware'
import { Moon } from './application/slackbot/moon'
import { slackSlashCommand } from './application/slackbot/slack-response'
import Router from 'express-promise-router'
import * as firebaseAdmin from 'firebase-admin'

const version = AppConfig.version

// initialize slack bot
const slackBotMoon = new Moon()

// initialize line bot
const lineBotTetoClientConfigConfig: ClientConfig = {
  channelAccessToken: LineBotTetoConfig.channelAccessToken
}
const lineBotTetoMiddleware = linebotMiddleware(LineBotTetoConfig.channelSecret)
const lineBotTetoClient = new Client(lineBotTetoClientConfigConfig)
const lineBotTeto = new Teto(lineBotTetoClient)

// initialize firebase admin
firebaseAdmin.initializeApp({
  credential: firebaseAdmin.credential.cert(FirebaseConfig.serviceAccountJson),
  databaseURL: FirebaseConfig.databaseURL
})

// setup express
const router = Router()
router.get('/api/health', (req: express.Request, res: express.Response) => {
  res.send({version : version})
})
router.get('/api/my', async (req: express.Request, res: express.Response) => {
  const authHeader = req.header('Authorization')
  if (authHeader !== undefined && authHeader.startsWith('Bearer ')) {
    const idToken = authHeader.substring(7)
    try {
      await firebaseAdmin.auth().verifyIdToken(idToken)
      res.send('hello')
    } catch (e) {
      res.status(400).send(e.message)
    }
  } else {
    res.status(401).send('no authorization')
  }
})
router.post(
  '/api/slackbot/moon/slash',
  rawBodySaver,
  slackUrlEncodedMiddleware(SlackBotMoonConfig.appSigningSecret),
  slackSlashCommand(async (req, res) => {
    const body = await slackBotMoon.handle(req)
    res.send(body)
  })
)
router.post('/api/linebot/teto', lineBotTetoMiddleware, (req, res) => {
  lineBotTeto
    .handle(req.body.events)
    .then(result => res.send(result))
    .catch(() => console.error('failed to handle linebot tet request'))
})

const apiApp = express()
apiApp.use(router)

if (process.env.RUN_API_SERVER) {
  const server = apiApp.listen(3000, () => {
    const address = server.address()
    const port = typeof address === 'object' ? address.port.toString() : address
    console.log('Node.js is listening to PORT:' + port)
  })
}

export default apiApp
