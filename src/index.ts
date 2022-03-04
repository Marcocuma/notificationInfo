
import { registerPlugin } from '@capacitor/core';

import type { NotificationinfoPlugin } from './definitions';

const Notificationinfo = registerPlugin<NotificationinfoPlugin>(
  'Notificationinfo',
);

export * from './definitions';
export { Notificationinfo };
