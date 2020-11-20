/* tslint:disable */
import { BaseCustomFieldValue } from './base-custom-field-value';
import { CustomField } from './custom-field';

/**
 * See the description on `BaseCustomFieldValue`
 */
export interface CustomFieldValue extends BaseCustomFieldValue {

  /**
   * The custom field reference
   */
  field?: CustomField;
}
