/* tslint:disable */

/**
 * Contains details about the notifications
 */
export interface NotificationsStatus {

  /**
   * The last view date tracked by the server through `POST /notifications/viewed`
   */
  lastViewDate?: string;

  /**
   * Indicates the number of received notifications after the last view date (i.e `lastViewDate`).
   */
  newNotifications?: number;

  /**
   * Indicates the total number of unread notifications.
   */
  unreadNotifications?: number;
}
