/* tslint:disable */
import { CustomField } from './custom-field';
import { EntityReference } from './entity-reference';

/**
 * Adds to `CustomField` some record-specific definitions
 */
export interface RecordCustomField extends CustomField {

  /**
   * The number of columns this field spans
   */
  colspan?: number;

  /**
   * The record fields section
   */
  section?: EntityReference;
}
