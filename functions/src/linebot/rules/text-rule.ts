import {Message, TextMessage} from '@line/bot-sdk';

export interface TextRule {
  handle(text: string): Promise<Message[] | null>
}

export class PingRule implements TextRule {
  async handle(text: string): Promise<Message[] | null> {
    if (text.toLowerCase().indexOf('ping') === 0) {
      return Promise.resolve([{
        type: 'text',
        text: 'pong',
      } as TextMessage]);
    } else {
      return Promise.resolve(null);
    }
  }
}
