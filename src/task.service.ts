import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

const EVERY_MINUTE = '* * * * *';

@Injectable()
export class TaskService {
  //   @Cron(EVERY_MINUTE)
  //   handleCron() {
  //     console.log('hello world');
  //   }
}
