import {NextFunction, Request, Response} from 'express-serve-static-core';
import * as crypto from 'crypto';

// slackのsigning secret検証時にraw bodyが必要なので予め取る
export const rawBodySaver = (req: any, res: any, buf: any, encoding: any) => {
  if (buf && buf.length) {
    // now we can access req.rawBody
    req.rawBody = buf.toString(encoding || 'utf8');
  }
};

// https://api.slack.com/docs/verifying-requests-from-slack
export const slackUrlEncodedMiddleware = (slackSigningSecret: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const sigBaseString = `v0:${req.header('X-Slack-Request-Timestamp')}:${(req as any).rawBody}`;
    const hash = crypto.createHmac('sha256', slackSigningSecret)
      .update(sigBaseString)
      .digest('hex');
    if (req.header('X-Slack-Signature') !== `v0=${hash}`) {
      res.sendStatus(401)
    } else {
      next();
    }
  };
};
