/* tslint:disable */

/**
 * Common fields for either creating or editing an additional contact information
 */
export interface AddressContactInfoManage {

  /**
   * Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type. Example: `{..., "customValues": {"gender": "male", "birthDate": "1980-10-27"}}`
   */
  customValues?: { [key: string]: string };

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
}
