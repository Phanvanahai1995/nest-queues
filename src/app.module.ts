import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TaskService } from './task.service';
import { ScheduleModule } from '@nestjs/schedule';
import { BullModule } from '@nestjs/bullmq';
import { MessageProducerService } from './message.producer.service';
import { MessageConsumer } from './message.consumer';
import { FileProducerService } from './file.producer.service';
import { FileConsumer } from './file.comsumer';

@Module({
  imports: [
    ScheduleModule.forRoot(),
    BullModule.forRoot({
      connection: {
        host: 'localhost',
        port: 6379,
      },
    }),
    BullModule.registerQueue(
      {
        name: 'message-queue',
      },
      {
        name: 'file-operation',
      },
    ),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    TaskService,
    MessageProducerService,
    MessageConsumer,
    FileProducerService,
    FileConsumer,
  ],
})
export class AppModule {}
