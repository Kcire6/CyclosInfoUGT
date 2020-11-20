/* tslint:disable */
import { PasswordType } from './password-type';

/**
 * Permissions a single password
 */
export interface PasswordPermissions {

  /**
   * Can change this password?
   */
  change?: boolean;

  /**
   * Can enable / disable this password?
   */
  enable?: boolean;

  /**
   * Can reset this password?
   */
  reset?: boolean;
  type?: PasswordType;

  /**
   * Can unblock this password if blocked by exceeding tries?
   */
  unblock?: boolean;
}
