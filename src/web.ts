import { WebPlugin } from '@capacitor/core';
import { NotificationinfoPlugin } from './definitions';

export class NotificationinfoWeb extends WebPlugin implements NotificationinfoPlugin {
  constructor() {
    super({
      name: 'Notificationinfo',
      platforms: ['web'],
    });
  }


  getNotificationInfo(): Promise<{ value: Object }> {
    return Promise.resolve({ value: {} });
  }
}

const Notificationinfo = new NotificationinfoWeb();

export { Notificationinfo };

import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Notificationinfo);
