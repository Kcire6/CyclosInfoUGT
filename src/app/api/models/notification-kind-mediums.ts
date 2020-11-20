/* tslint:disable */
import { NotificationKind } from './notification-kind';

/**
 * Indicates the mediums a notification kind is sent
 */
export interface NotificationKindMediums {

  /**
   * Indicates whether notifications of this type will be sent to the user's e-mail.
   */
  email?: boolean;

  /**
   * Indicates whether a given kind of notification is enabled. Internal notifications act as a 'master control' for the notification kind. If disabled, no other mediums will be enabled either.
   */
  internal?: boolean;
  kind?: NotificationKind;

  /**
   * Indicates whether notifications of this type will be sent as SMS to the user's mobile phone.
   */
  sms?: boolean;
}
