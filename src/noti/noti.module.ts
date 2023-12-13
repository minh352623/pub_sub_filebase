import { Module } from '@nestjs/common';
import { NotiController } from './noti.controller';

@Module({
  controllers: [NotiController]
})
export class NotiModule {}
