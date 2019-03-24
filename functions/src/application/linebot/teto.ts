import {
  Client,
  Message,
  MessageEvent,
  TextMessage,
  WebhookEvent
} from '@line/bot-sdk'
import { MessageHandler } from './message-handler'

export class Teto {
  constructor(private client: Client) {}

  async handle(events: WebhookEvent[]): Promise<string> {
    return Promise.all(events.map(event => this.handleEvent(event))).then(
      res => 'ok'
    )
  }

  private async handleEvent(event: WebhookEvent): Promise<any> {
    switch (event.type) {
      case 'message':
        return this.handleMessageEvent(event).then(messages => {
          if (messages) {
            this.client.replyMessage(event.replyToken, messages)
          }
        })
      default:
        return Promise.resolve(null)
    }
  }

  private async handleMessageEvent(
    event: MessageEvent
  ): Promise<Message[] | null> {
    switch (event.message.type) {
      case 'text':
        return MessageHandler(this.client, event.replyToken, event.message)
      default:
        return Promise.resolve([
          {
            type: 'text',
            text: '🐶'
          } as TextMessage
        ])
    }
  }
}
