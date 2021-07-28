import { WebPlugin } from '@capacitor/core';
import { NotificationinfoPlugin } from './definitions';
export declare class NotificationinfoWeb extends WebPlugin implements NotificationinfoPlugin {
    constructor();
    getNotificationInfo(): Promise<{
        value: Object;
    }>;
}
declare const Notificationinfo: NotificationinfoWeb;
export { Notificationinfo };
