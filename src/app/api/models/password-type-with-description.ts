/* tslint:disable */
import { PasswordType } from './password-type';

/**
 * Password type definition plus a description.
 */
export interface PasswordTypeWithDescription extends PasswordType {

  /**
   * The description of the password type. Useful to know what a password must contain to meet the restrictions of this type.
   */
  description?: string;
}
