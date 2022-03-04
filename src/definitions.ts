export interface NotificationinfoPlugin {
  getNotificationInfo(): Promise<{ value: Object }>;
}
