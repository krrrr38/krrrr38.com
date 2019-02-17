import {Message, TextMessage} from '@line/bot-sdk';
import {PingResponse, PingService} from '../../../domain/ping/ping-service';

export interface TextRule {
  handle(text: string): Promise<Message[] | null>
}

export class PingRule implements TextRule {
  private pingService: PingService;

  constructor(pingService: PingService) {
    this.pingService = pingService
  }

  async handle(text: string): Promise<Message[] | null> {
    if (text.toLowerCase().indexOf('ping') === 0) {
      return this.pingService.run().then((res: PingResponse) => {
        return [{
          type: 'text',
          text: res.message,
        } as TextMessage]
      });
    } else {
      return Promise.resolve(null);
    }
  }
}
