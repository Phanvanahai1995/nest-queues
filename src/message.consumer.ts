import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';

@Processor('message-queue')
export class MessageConsumer extends WorkerHost {
  private readonly logger = new Logger(MessageConsumer.name);

  async process(job: Job, token?: string) {
    switch (job.name) {
      case 'message-job':
        {
          this.logger.log('message-job', job.data.text);
        }
        break;
    }
  }
}
