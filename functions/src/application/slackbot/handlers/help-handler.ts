import {SlackHandleFunction} from './slack-handler';

const helpHandler: SlackHandleFunction = (_: string[]) => {
  return Promise.resolve({
    response_type: 'in_channel',
    text: 'please type with command: e.g. ping'
  });
};

export default helpHandler

