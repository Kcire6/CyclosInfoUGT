/* tslint:disable */

/**
 * Indicates the type of a custom wizard
 * Possible values are:
 * - `registration`: The wizard is used to register a user
 * - `system`: The wizard is executed by admins
 * - `user`: The wizard is executed over a user
 */
export enum WizardKind {
  REGISTRATION = 'registration',
  SYSTEM = 'system',
  USER = 'user'
}
