import { Controller, Get, Post, Query } from '@nestjs/common';
import { AppService } from './app.service';
import { MessageProducerService } from './message.producer.service';
import { FileProducerService } from './file.producer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly messageProducerService: MessageProducerService,
    private readonly fileService: FileProducerService,
  ) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('send-message')
  sendMessage(@Query('msg') msg: string) {
    this.messageProducerService.sendMessage(msg);

    return msg;
  }

  @Get('delete')
  async deleteFile(@Query('fileName') fileName: string) {
    await this.fileService.deleteFile(fileName);

    return 'delete';
  }
}
