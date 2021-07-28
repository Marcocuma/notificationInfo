var capacitorPlugin = (function (exports, core) {
    'use strict';

    class NotificationinfoWeb extends core.WebPlugin {
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
    core.registerWebPlugin(Notificationinfo);

    exports.Notificationinfo = Notificationinfo;
    exports.NotificationinfoWeb = NotificationinfoWeb;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

}({}, capacitorExports));
//# sourceMappingURL=plugin.js.map
