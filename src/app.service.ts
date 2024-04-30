import { Injectable } from '@nestjs/common';
import { readdirSync } from 'fs';

@Injectable()
export class AppService {
  getHello() {
    return readdirSync(
      'D:\\Downloads\\DouyinLiveRecorder v3.0.2\\DouyinLiveRecorder.v3.0.2\\videos\\抖音直播',
      { withFileTypes: true },
    ).filter((dir) => dir.isDirectory());
  }
}
