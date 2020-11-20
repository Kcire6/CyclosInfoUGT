/* tslint:disable */
import { AccountType } from './account-type';
import { BaseNotificationSettings } from './base-notification-settings';
import { EntityReference } from './entity-reference';
import { Group } from './group';
import { NotificationSettingsEdit } from './notification-settings-edit';
import { TransferType } from './transfer-type';

/**
 * Contains configuration data to edit the notification settings a given user. The regular user (member / broker / operator) and administrator notification settings use different notification kinds.
 */
export interface NotificationSettingsDataForEdit extends BaseNotificationSettings {

  /**
   * The visible regular payment types that require authorization. Only applicable for administrators, not users (members / brokers).
   */
  authorizablePayments?: Array<TransferType>;

  /**
   * The visible payment types that allow external payments. Only applicable for administrators, not users (members / brokers).
   */
  externalPayments?: Array<TransferType>;

  /**
   * The visible message categories. Only applicable for administrators, not users (members / brokers).
   */
  messageCategories?: Array<EntityReference>;

  /**
   * The visible regular payment types. Only applicable for administrators, not users (members / brokers).
   */
  payments?: Array<TransferType>;

  /**
   * The object that can be modified and `POST`ed back to `/{user}/notification-settings` to save the notifications.
   */
  settings?: NotificationSettingsEdit;

  /**
   * The available accounts types for user payment notifications
   */
  userAccounts?: Array<AccountType>;

  /**
   * The visible user groups. Only applicable for administrators, not users (members / brokers).
   */
  userGroups?: Array<Group>;

  /**
   * The visible voucher configurations. Only applicable for administrators, not users (members / brokers).
   */
  voucherConfigurations?: Array<EntityReference>;
}
