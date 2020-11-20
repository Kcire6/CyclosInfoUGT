/* tslint:disable */
import { BaseCustomFieldValue } from './base-custom-field-value';
import { RecordCustomField } from './record-custom-field';

/**
 * Adds to `CustomFieldValue` the section where this field should be shown
 */
export interface RecordCustomFieldValue extends BaseCustomFieldValue {

  /**
   * The custom field reference
   */
  field?: RecordCustomField;
}
