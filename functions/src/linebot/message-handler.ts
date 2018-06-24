import {
  TextRule,
  PingRule,
} from './rules/text-rule';
import {
  Client,
  TextEventMessage,
} from '@line/bot-sdk';

const rules: TextRule[] = [
  new PingRule()
];

export const MessageHandler = async (client: Client, replyToken: string, message: TextEventMessage) => {
  const text = message.text
  for(const rule of rules) {
    const messagesOrNull = await rule.handle(text)
    if (messagesOrNull) {
      return messagesOrNull;
    }
  }
  return Promise.resolve(null);
};
