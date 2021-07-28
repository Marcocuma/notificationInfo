declare module '@capacitor/core' {
  interface PluginRegistry {
    Notificationinfo: NotificationinfoPlugin;
  }
}

export interface NotificationinfoPlugin {
  getNotificationInfo(): Promise<{ value: Object }>;
}
