/* tslint:disable */
import { CustomFieldDetailed } from './custom-field-detailed';
import { EntityReference } from './entity-reference';

/**
 * Adds to `CustomFieldDetailed` some record-specific definitions
 */
export interface RecordCustomFieldDetailed extends CustomFieldDetailed {

  /**
   * The number of columns this field spans
   */
  colspan?: number;

  /**
   * The record fields section
   */
  section?: EntityReference;
}
