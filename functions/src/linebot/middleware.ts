import {NextFunction, Request, Response} from 'express-serve-static-core';
import {validateSignature} from '@line/bot-sdk';

export const linebotMiddleware = (secret: string) => {
  return (req: Request, res: Response, next: NextFunction) => {
    // https://line.github.io/line-bot-sdk-nodejs/pages/api-reference/middleware.html
    // > There are environments where req.body is pre-parsed, such as Firebase Cloud Functions.
    // > If it parses the body into string or buffer, do not worry as the middleware will work just fine.
    // > If the pre-parsed body is an object, please use validateSignature() manually with the raw body.
    const body = (req as any).rawBody;
    const signature = req.header('x-line-signature');
    if (!validateSignature(body, secret, signature)) {
      res.status(403).send('invalid signature');
      return;
    }

    next();
  };
};

