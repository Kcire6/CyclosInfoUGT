/* tslint:disable */

/**
 * Common fields for either creating or editing a contact
 */
export interface ContactManage {

  /**
   * Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type. Example: `{..., "customValues": {"gender": "male", "birthDate": "1980-10-27"}}`
   */
  customValues?: { [key: string]: string };
}
