/* tslint:disable */
import { User } from './user';
import { WebshopSettingsDetailed } from './webshop-settings-detailed';

/**
 * Details of a user webshop settings
 */
export interface WebshopSettingsView extends WebshopSettingsDetailed {

  /**
   * -> True if the authenticated user can edit the settings for the given user and also if the given user has its webshop enable, otherwise false.
   */
  canEdit?: boolean;
  user?: User;
}
