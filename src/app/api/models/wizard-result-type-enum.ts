/* tslint:disable */

/**
 * Indicates how clients should handle the wizard result
 * Possible values are:
 * - `plainText`: The `result` field is returned, and its content is plain text
 * - `registration`: The `registrationResult` field is returned, just like a normal user registration would return
 * - `richText`: The `result` field is returned, and its content is HTML
 */
export enum WizardResultTypeEnum {
  PLAIN_TEXT = 'plainText',
  REGISTRATION = 'registration',
  RICH_TEXT = 'richText'
}
