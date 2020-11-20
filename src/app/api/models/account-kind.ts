/* tslint:disable */

/**
 * Indicates whether an account belongs to system or user
 * Possible values are:
 * - `system`: System account, there is only one account per type in the system. Managed only by administrators
 * - `user`: User account, there is one account of this type per user.
 */
export enum AccountKind {
  SYSTEM = 'system',
  USER = 'user'
}
