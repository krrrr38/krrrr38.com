import {PingRule, TextRule,} from './rules/text-rule';
import {Client, TextEventMessage,} from '@line/bot-sdk';
import {PingService} from '../../domain/ping/ping-service';

const rules: TextRule[] = [
  new PingRule(new PingService())
];

export const MessageHandler = async (client: Client, replyToken: string, message: TextEventMessage) => {
  const text = message.text;
  for (const rule of rules) {
    const messagesOrNull = await rule.handle(text);
    if (messagesOrNull) {
      return messagesOrNull;
    }
  }
  return Promise.resolve(null);
};
