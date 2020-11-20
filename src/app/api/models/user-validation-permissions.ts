/* tslint:disable */

/**
 * Permissions over the registration / email change validations of a given user
 */
export interface UserValidationPermissions {

  /**
   * Can the authenticated administrator or broker re-send the e-mail to confirm the e-mail change of the given user?
   */
  resendEmailChange?: boolean;

  /**
   * Can the authenticated administrator or broker re-send the e-mail to confirm the registration of the given user?
   */
  resendRegistrationValidation?: boolean;

  /**
   * Can the authenticated administrator or broker manually mark a pending e-mail change as validated for the given user?
   */
  validateEmailChange?: boolean;

  /**
   * Can the authenticated administrator or broker manually mark a pending user as validated?
   */
  validateRegistration?: boolean;
}
