/* tslint:disable */
import { AccountNotificationSettings } from './account-notification-settings';
import { AccountType } from './account-type';

/**
 * Settings regarding notifications for a given account
 */
export interface AccountNotificationSettingsView extends AccountNotificationSettings {
  accountType?: AccountType;
}
