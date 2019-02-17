import * as express from 'express';
import helpHandler from './handlers/help-handler';
import pingHandler from './handlers/ping-handler';
import {SlackHandleFunction} from './handlers/slack-handler';

export class Moon {

  async handle(req: express.Request): Promise<any> {
    // `/bot command [args...]`
    const [command, ...args] = req.body.text.trim().split(/\s+/);
    return await Moon.findHandlerByCommand(command)(args);
  }

  private static findHandlerByCommand(command: string): SlackHandleFunction {
    if (!command) {
      return helpHandler;
    }

    // commandに応じて処理を変える
    switch (command.toLowerCase()) {
      case 'ping':
        return pingHandler;
      default:
        return helpHandler;
    }
  }
}
