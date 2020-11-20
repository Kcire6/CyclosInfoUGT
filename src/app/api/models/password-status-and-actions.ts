/* tslint:disable */
import { PasswordActions } from './password-actions';
import { PasswordStatus } from './password-status';
import { PasswordTypeWithDescription } from './password-type-with-description';

/**
 * Contains the status and possible actions over a password
 */
export interface PasswordStatusAndActions extends PasswordStatus {

  /**
   * The permissions over actions the authenticated user can perform on this password
   */
  permissions?: PasswordActions;

  /**
   * Indicates whether the `change` action, if enabled, requires the old password to be sent. This is the case when changing the password of the logged user, and the current password was ever set and is not currently expired / reset.
   */
  requireOldPasswordForChange?: boolean;
  type?: PasswordTypeWithDescription;
}
