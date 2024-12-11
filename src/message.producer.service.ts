import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class MessageProducerService {
  constructor(@InjectQueue('message-queue') private queue: Queue) {}

  async sendMessage(msg: string) {
    await this.queue.add(
      'message-job',
      {
        text: msg,
      },
      { delay: 1000 },
    );
  }
}
