/* tslint:disable */
import { AccountNotificationSettings } from './account-notification-settings';
import { NotificationKindMediums } from './notification-kind-mediums';
import { SystemAlertTypeEnum } from './system-alert-type-enum';
import { UserAlertTypeEnum } from './user-alert-type-enum';

/**
 * The parameters used to save the notification settings
 */
export interface NotificationSettingsEdit {

  /**
   * The qualified internal names (accountType.paymentType) or ids of payment types to be notified for notifications of kind `adminPaymentAwaitingAuthorization`. Only applicable for administrators, not users.
   */
  authorizablePayments?: Array<string>;

  /**
   * The qualified internal names (accountType.paymentType) or ids of payment types to be notified for notifications of kind `adminExternalPaymentExpired`. Only applicable for administrators, not users.
   */
  externalPaymentsExpired?: Array<string>;

  /**
   * The qualified internal names (accountType.paymentType) or ids of payment types to be notified for notifications of kind `adminExternalPaymentPerformedFailed`. Only applicable for administrators, not users.
   */
  externalPaymentsFailed?: Array<string>;

  /**
   * The internal names or ids of message categories to which new messages to system will be forwarded to the administrator e-mail. Not tied to any notification kind. Only applicable for administrators, not users.
   */
  forwardMessageCategories?: Array<string>;

  /**
   * Indicates whether to forward received internal messages to the user's e-mail. Only applicable for users, not administrators.
   */
  forwardMessages?: boolean;

  /**
   * Per notification kind, indicates the mediums it is sent. It is guaranteed that all and only the allowed kinds are sent.
   */
  notifications?: Array<NotificationKindMediums>;

  /**
   * The qualified internal names (accountType.paymentType) or ids of payment types to be notified for notifications of kind `adminPaymentPerformed`. Only applicable for administrators, not users.
   */
  payments?: Array<string>;

  /**
   * The kinds of system alerts to be notified for notifications of kind `adminSystemAlert`. Only applicable for administrators, not users.
   */
  systemAlerts?: Array<SystemAlertTypeEnum>;

  /**
   * Contains the settings for each user account. Only applicable for users, not administrators. The key is the account type id or internal name.
   */
  userAccounts?: { [key: string]: AccountNotificationSettings };

  /**
   * The kinds of user alerts to be notified for notifications of kind `adminUserAlert`. Only applicable for administrators, not users.
   */
  userAlerts?: Array<UserAlertTypeEnum>;

  /**
   * The internal names or ids of groups to be notified for notifications of kind `adminUserRegistration`. Only applicable for administrators, not users.
   */
  userGroups?: Array<string>;

  /**
   * The version stamp for the current object, used for optimistic locking. When saving, the same version as previously received needs to be passed back. If no one else has saved the object, the version will match and the object will be updated. However, if someone other has saved the object, the version will no longer match, and an error will be raised. This is used to prevent multiple users (or processes) from updating the same object and unwilingly overridding the property values, leading to data loss.
   */
  version?: number;

  /**
   * The internal names or ids of voucher configurations to be notified for notifications of kinds `adminGeneratedVouchersAboutToExpire` and `adminGeneratedVouchersExpired`. Only applicable for administrators, not users.
   */
  voucherConfigurations?: Array<string>;

  /**
   * The internal names or ids of voucher configurations to be notified for notifications of kind `adminVoucherBuyingAboutToExpire`. Only applicable for administrators, not users.
   */
  voucherConfigurationsBuying?: Array<string>;
}
