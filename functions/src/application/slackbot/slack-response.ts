import * as express from 'express'

const _errorMessageResponse = (message: string) => {
  return {
    response_type: 'in_channel',
    attachments: [
      {
        text: message,
        color: 'danger'
      }
    ]
  }
}

// Error時にSlackへ直接stack traceを返すslash command用のhandler
export const slackSlashCommand = (func: (req: express.Request, res: express.Response) => any) => {
  return (req: express.Request, res: express.Response) => {
    try {
      func(req, res)
    } catch (e) {
      res.json(_errorMessageResponse(`${e.stack}`))
    }
  }
}
