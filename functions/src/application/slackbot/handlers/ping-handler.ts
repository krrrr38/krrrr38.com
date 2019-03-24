import { PingResponse, PingService } from '../../../domain/ping/ping-service'
import { SlackHandleFunction } from './slack-handler'

const pingService = new PingService()
const pingHandler: SlackHandleFunction = (_: string[]) => {
  return pingService.run().then((res: PingResponse) => {
    return {
      response_type: 'in_channel',
      text: res.message
    }
  })
}

export default pingHandler
