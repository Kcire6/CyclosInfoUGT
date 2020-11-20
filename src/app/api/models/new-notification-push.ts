/* tslint:disable */
import { Notification } from './notification';
import { NotificationsStatus } from './notifications-status';

/**
 * A new notification has been received
 */
export interface NewNotificationPush extends NotificationsStatus {
  notification?: Notification;
}
