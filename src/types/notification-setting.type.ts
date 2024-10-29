export type NotificationSetting = {
  value: boolean;
};

export type NotificationSettings = {
  bulletin: boolean;
  digest: boolean;
  meeting_update: boolean;
  meeting_update_as_organizer: boolean;
  message: boolean;
  push_notification: boolean;
  push_notification_browser: boolean;
  push_notification_sound: boolean;
  reference: boolean;
  reminder: boolean;
  space: boolean;
  subscription: boolean;
  user?: boolean;
};
