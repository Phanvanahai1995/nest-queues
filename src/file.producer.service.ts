import { InjectQueue } from '@nestjs/bullmq';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bullmq';

@Injectable()
export class FileProducerService {
  constructor(@InjectQueue('file-operation') private readonly queue: Queue) {}

  async deleteFile(fileName: string) {
    // logic to delete file record from db
    let filePath = `C:/Users/Admin/Downloads/${fileName}`;
    await this.queue.add(
      'delete-file',
      {
        path: filePath,
      },
      {
        delay: 10000,
      },
    );
  }
}
