/* tslint:disable */
import { ContactInfo } from './contact-info';
import { CustomFieldValue } from './custom-field-value';
import { Operation } from './operation';

/**
 * Contains extra details of an additional contact information
 */
export interface ContactInfoDetailed extends ContactInfo {

  /**
   * The list of custom field values on this additional contact information
   */
  customValues?: Array<CustomFieldValue>;

  /**
   * The list of custom operations the logged user can run over this additional contact information
   */
  operations?: Array<Operation>;
}
