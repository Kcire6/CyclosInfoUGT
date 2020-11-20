/* tslint:disable */
import { RoleEnum } from './role-enum';
import { User } from './user';

/**
 * Contains common data among `NotificationSettingsView` and `NotificationSettingsDataForEdit`.
 */
export interface BaseNotificationSettings {

  /**
   * Indicates whether the logged user can edit the notitification settings of this user.
   */
  canEdit?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Indicates whether the logged user can manage the notitification settings of this user.
   *
   * @deprecated
   */
  editable?: boolean;

  /**
   * Indicates whether e-mail notifications are allowed
   */
  emailAllowed?: boolean;

  /**
   * Indicates whether to forward received internal messages to the user's e-mail. Only applicable for users (members / brokers), not administrators.
   */
  forwardMessages?: boolean;

  /**
   * Indicates whether it can be configured to forward received internal messages to the user's e-mail. Only applicable for users (members / brokers), not administrators.
   */
  forwardMessagesAllowed?: boolean;

  /**
   * The maximum number of allowed SMS messages per month
   */
  maxSmsPerMonth?: number;
  role?: RoleEnum;

  /**
   * Indicates whether SMS notifications are allowed
   */
  smsAllowed?: boolean;

  /**
   * The number of SMS messages already sent this month
   */
  smsCountThisMonth?: number;
  user?: User;
}
