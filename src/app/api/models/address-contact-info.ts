/* tslint:disable */
import { CustomFieldValue } from './custom-field-value';

/**
 * Contact information for an address
 */
export interface AddressContactInfo {

  /**
   * The list of custom field values on this additional contact information
   */
  customValues?: Array<CustomFieldValue>;

  /**
   * The e-mail for this additional contact information
   */
  email?: string;

  /**
   * The landline phone extension for this additional contact information
   */
  landLineExtension?: string;

  /**
   * The formatted landline phone for this additional contact information
   */
  landLinePhone?: string;

  /**
   * The formatted mobile phone for this additional contact information
   */
  mobilePhone?: string;

  /**
   * The land-line phone, normalized to the E.164 format
   */
  normalizedLandLinePhone?: string;

  /**
   * The mobile phone, normalized to the E.164 format
   */
  normalizedMobilePhone?: string;
}
