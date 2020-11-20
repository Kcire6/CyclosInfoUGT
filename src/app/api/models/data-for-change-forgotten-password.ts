/* tslint:disable */
import { PasswordType } from './password-type';
import { User } from './user';
import { UserRegistrationPrincipal } from './user-registration-principal';

/**
 * Definitions for a user to confirm a forgotten password request, after the verification code was successfully verified.
 */
export interface DataForChangeForgottenPassword {

  /**
   * Use `passwordType.mode == 'generated'` instead.
   *
   *
   * Indicates whether the password that is being affected is generated (when `true`) or manual (when `false`).
   *
   * @deprecated
   */
  generated?: boolean;

  /**
   * The password type which is being changed
   */
  passwordType?: PasswordType;

  /**
   * The list of user identifications (principals) which can be used in the current channel
   */
  principals?: Array<UserRegistrationPrincipal>;

  /**
   * If configured in Cyclos, and defined by the user, will be the security question that needs to be answered in order to complete the forgotten password reset request.
   */
  securityQuestion?: string;

  /**
   * The user which is having the password changed
   */
  user?: User;
}
