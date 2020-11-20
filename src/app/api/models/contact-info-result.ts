/* tslint:disable */
import { ContactInfo } from './contact-info';

/**
 * An additional contact information as a result item
 */
export interface ContactInfoResult extends ContactInfo {

  /**
   * Holds the values for custom fields, keyed by field internal name or id. The format of the value depends on the custom field type. Example: `{..., "customValues": {"gender": "male", "birthDate": "1980-10-27"}}`
   */
  customValues?: { [key: string]: string };

  /**
   * Indicates whether this additional contact information is hidden for other users.
   */
  hidden?: boolean;
}
