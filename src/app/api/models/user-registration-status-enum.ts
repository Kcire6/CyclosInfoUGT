/* tslint:disable */

/**
 * The status of the user after the registration
 * Possible values are:
 * - `active`: The user is initially active
 * - `emailValidation`: The user has received an e-mail, with a link to verify the e-mail address. Once verified, the registration will be complete
 * - `inactive`: The user is initially inactive, and an administrator needs to manually activate the user
 */
export enum UserRegistrationStatusEnum {
  ACTIVE = 'active',
  EMAIL_VALIDATION = 'emailValidation',
  INACTIVE = 'inactive'
}
