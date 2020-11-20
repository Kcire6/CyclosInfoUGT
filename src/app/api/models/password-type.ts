/* tslint:disable */
import { BasePasswordType } from './base-password-type';
import { PasswordModeEnum } from './password-mode-enum';

/**
 * Contains definitions for a password type
 */
export interface PasswordType extends BasePasswordType {

  /**
   * Indicates whether this password type is defined in global mode (`true`) or in a network (`false`)
   */
  global?: boolean;
  mode?: PasswordModeEnum;
}
