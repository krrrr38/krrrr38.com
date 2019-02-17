export interface PingResponse {
  message: string;
}

export class PingService {
  run(): Promise<PingResponse> {
    return Promise.resolve({
      message: "pong",
    })
  }
}
