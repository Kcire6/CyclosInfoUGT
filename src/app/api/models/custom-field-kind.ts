/* tslint:disable */

/**
 * Determines the kind if a custom field
 * Possible values are:
 * - `contact`: Contact fields.
 * - `contactInfo`: Additional contact information fields.
 * - `custom_operation`: Custom operation fields.
 * - `custom_wizard`: Custom wizard fields.
 * - `document`: Document fields.
 * - `marketplace`: Advertisements fields.
 * - `record`: Record fields.
 * - `transaction`: Transaction fields.
 * - `user`: User profile fields.
 */
export enum CustomFieldKind {
  CONTACT = 'contact',
  CONTACT_INFO = 'contactInfo',
  CUSTOM_OPERATION = 'custom_operation',
  CUSTOM_WIZARD = 'custom_wizard',
  DOCUMENT = 'document',
  MARKETPLACE = 'marketplace',
  RECORD = 'record',
  TRANSACTION = 'transaction',
  USER = 'user'
}
