/* tslint:disable */
import { AccountNotificationSettingsView } from './account-notification-settings-view';
import { BaseNotificationSettings } from './base-notification-settings';
import { EntityReference } from './entity-reference';
import { Group } from './group';
import { NotificationKindMediums } from './notification-kind-mediums';
import { SystemAlertTypeEnum } from './system-alert-type-enum';
import { TransferType } from './transfer-type';
import { UserAlertTypeEnum } from './user-alert-type-enum';

/**
 * Contains the current notification settings for a given user. The regular user (member / broker) and administrator notification settings use different notification kinds.
 */
export interface NotificationSettingsView extends BaseNotificationSettings {

  /**
   * The payment types to be notified for notifications of kind `adminPaymentAwaitingAuthorization`. Only applicable for administrators, not users (members / brokers).
   */
  authorizablePayments?: Array<TransferType>;

  /**
   * The payment types to be notified for notifications of kind `adminExternalPaymentExpired`. Only applicable for administrators, not users (members / brokers).
   */
  externalPaymentsExpired?: Array<TransferType>;

  /**
   * The payment types to be notified for notifications of kind `adminExternalPaymentPerformedFailed`. Only applicable for administrators, not users (members / brokers).
   */
  externalPaymentsFailed?: Array<TransferType>;

  /**
   * The message categories to which new messages to system will be forwarded to the administrator e-mail. Not tied to any notification kind. Only applicable for administrators, not users (members / brokers).
   */
  forwardMessageCategories?: Array<EntityReference>;

  /**
   * Per notification kind, indicates the mediums it is sent. It is guaranteed that all and only the allowed kinds are sent.
   */
  notifications?: Array<NotificationKindMediums>;

  /**
   * The payment types to be notified for notifications of kind `adminPaymentPerformed`. Only applicable for administrators, not users (members / brokers).
   */
  payments?: Array<TransferType>;

  /**
   * The kinds of system alerts to be notified for notifications of kind `adminSystemAlert`. Only applicable for administrators, not users (members / brokers).
   */
  systemAlerts?: Array<SystemAlertTypeEnum>;

  /**
   * Contains the settings for each user account. Only applicable for users (members / brokers), not administrators.
   */
  userAccounts?: Array<AccountNotificationSettingsView>;

  /**
   * The kinds of user alerts to be notified for notifications of kind `adminUserAlert`. Only applicable for administrators, not users (members / brokers).
   */
  userAlerts?: Array<UserAlertTypeEnum>;

  /**
   * The groups to be notified for notifications of kind `adminUserRegistration`. Only applicable for administrators, not users (members / brokers).
   */
  userGroups?: Array<Group>;

  /**
   * The voucher configurations to be notified for notifications of kinds `adminGeneratedVouchersAboutToExpire` and `adminGeneratedVouchersExpired`. Only applicable for administrators, not users (members / brokers).
   */
  voucherConfigurations?: Array<EntityReference>;

  /**
   * The voucher configurations to be notified for notifications of kind `adminVoucherBuyingAboutToExpire`. Only applicable for administrators, not users (members / brokers).
   */
  voucherConfigurationsBuying?: Array<EntityReference>;
}
