/* tslint:disable */
import { BasePasswordType } from './base-password-type';

/**
 * Data for a given password type to be used on user registration
 */
export interface PasswordTypeRegistration extends BasePasswordType {

  /**
   * Whether the current user can set the password to be changed on the first user login
   */
  canForceChange?: boolean;

  /**
   * The description to be show on the registration form
   */
  description?: string;
}
