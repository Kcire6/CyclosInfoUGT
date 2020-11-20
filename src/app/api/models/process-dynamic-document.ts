/* tslint:disable */

/**
 * Defines parameters used to process a dynamic document
 */
export interface ProcessDynamicDocument {

  /**
   * Holds the form field values, keyed by field internal name or id. The format of the value depends on the custom field type.
   */
  formFields?: { [key: string]: string };
}
