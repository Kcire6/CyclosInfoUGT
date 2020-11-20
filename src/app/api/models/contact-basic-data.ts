/* tslint:disable */
import { CustomFieldDetailed } from './custom-field-detailed';
import { User } from './user';

/**
 * Contains data shared by both ContactDataForNew and ContactDataForEdit
 */
export interface ContactBasicData {

  /**
   * The contact user details
   */
  contactUser?: User;

  /**
   * The contact custom fields
   */
  customFields?: Array<CustomFieldDetailed>;

  /**
   * The user which owns the contact
   */
  user?: User;
}
