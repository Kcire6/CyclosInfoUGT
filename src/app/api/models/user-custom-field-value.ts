/* tslint:disable */
import { CustomFieldValue } from './custom-field-value';

/**
 * Contains the custom field value information, plus the hidden flag
 */
export interface UserCustomFieldValue extends CustomFieldValue {

  /**
   * Whether this field is hidden for other users
   */
  hidden?: boolean;
}
