/* tslint:disable */
import { PasswordPermissions } from './password-permissions';

/**
 * Permissions over own passwords
 */
export interface PasswordsPermissions {

  /**
   * Can manage any password?
   */
  manage?: boolean;

  /**
   * Permissions over each password type
   */
  passwords?: Array<PasswordPermissions>;
}
