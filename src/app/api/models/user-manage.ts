/* tslint:disable */
import { BasicUserManage } from './basic-user-manage';

/**
 * Contains the fields for either creating or modifying a user
 */
export interface UserManage extends BasicUserManage {

  /**
   * An array with the internal names of either the basic or custom fields that should be hidden from other users. Currently the only basic profile field that can be hidden is email. Any other will be considered a custom field, and should be the same key as used in the 'customValues' property.
   */
  hiddenFields?: Array<string>;
}
