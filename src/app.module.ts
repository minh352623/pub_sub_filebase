import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { NotiModule } from './noti/noti.module';

@Module({
  imports: [NotiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
