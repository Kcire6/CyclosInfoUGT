/* tslint:disable */

/**
 * Common fields for either creating or editing an additional contact information
 */
export interface ContactInfoManage {

  /**
   * The identifier for the user address to be used as address of this additional contact information
   */
  address?: string;

  /**
   * Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type. Example: `{..., "customValues": {"gender": "male", "birthDate": "1980-10-27"}}`
   */
  customValues?: { [key: string]: string };

  /**
   * The e-mail for this additional contact information
   */
  email?: string;

  /**
   * Whether this additional contact information should be hidden for other users
   */
  hidden?: boolean;

  /**
   * The identifier of either an uploaded temporary image, or an existing additional contact image.
   */
  image?: string;

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
   * The address name
   */
  name?: string;
}
