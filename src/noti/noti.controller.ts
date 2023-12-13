import { Controller, Post } from '@nestjs/common';
import admin from 'firebase-admin';
import * as serviceAccount from './news-30800-firebase-adminsdk-sfsi4-7d8d3c5312.json';
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount as any),
});
@Controller('noti')
export class NotiController {
  @Post('send-test-message')
  sendNoti() {
    const message = {
      notification: {
        title: 'Title of Your Notification',
        body: 'Body of Your Notification',
      },
      topic: 'your_topic', // device registration token
    };

    admin
      .messaging()
      .send(message)
      .then((response) => {
        console.log('Successfully sent message:', response);
      })
      .catch((error) => {
        console.log('Error sending message:', error);
      });
    return 'success';
  }
}
