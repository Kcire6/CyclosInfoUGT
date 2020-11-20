/* tslint:disable */

/**
 * The scope determines where does a custom operation can be executed
 * Possible values are:
 * - `advertisement`: A custom operation which is executed over an advertisement
 * - `bulkAction`: A custom operation executed over a set of users (one at a time)
 * - `contact`: A custom operation which is executed over a contact in a user's contact list
 * - `contactInfo`: A custom operation which is executed over an additional contact information, which is part of the user profile
 * - `internal`: A custom operation which is executed by another custom operation
 * - `menu`: A custom operation which is visible in a custom menu item
 * - `record`: A custom operation which is executed over a record
 * - `system`: A general, system custom operation
 * - `transfer`: A custom operation which is executed over a transfer
 * - `user`: A custom operation over a single user
 */
export enum OperationScopeEnum {
  ADVERTISEMENT = 'advertisement',
  BULK_ACTION = 'bulkAction',
  CONTACT = 'contact',
  CONTACT_INFO = 'contactInfo',
  INTERNAL = 'internal',
  MENU = 'menu',
  RECORD = 'record',
  SYSTEM = 'system',
  TRANSFER = 'transfer',
  USER = 'user'
}
