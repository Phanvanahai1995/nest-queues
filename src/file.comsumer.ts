import { Processor, WorkerHost } from '@nestjs/bullmq';
import { Logger } from '@nestjs/common';
import { Job } from 'bullmq';
import * as fs from 'fs';

@Processor('file-operation')
export class FileConsumer extends WorkerHost {
  private readonly logger = new Logger(FileConsumer.name);
  async process(job: Job, token?: string) {
    switch (job.name) {
      case 'delete-file':
        {
          this.logger.log('delete-file', job.data.path);
          await fs.unlinkSync(job.data.path);
        }
        break;
    }
  }
}
