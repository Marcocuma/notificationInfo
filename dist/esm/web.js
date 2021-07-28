import { WebPlugin } from '@capacitor/core';
export class NotificationinfoWeb extends WebPlugin {
    constructor() {
        super({
            name: 'Notificationinfo',
            platforms: ['web'],
        });
    }
    getNotificationInfo() {
        return Promise.resolve({ value: {} });
    }
}
const Notificationinfo = new NotificationinfoWeb();
export { Notificationinfo };
import { registerWebPlugin } from '@capacitor/core';
registerWebPlugin(Notificationinfo);
//# sourceMappingURL=web.js.map