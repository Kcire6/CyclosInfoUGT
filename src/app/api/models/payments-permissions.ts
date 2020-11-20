/* tslint:disable */

/**
 * General payment permissions
 */
export interface PaymentsPermissions {

  /**
   * Can receive payments from users?
   */
  pos?: boolean;

  /**
   * Can perform payments between own accounts?
   */
  self?: boolean;

  /**
   * Can perform payments to system accounts?
   */
  system?: boolean;

  /**
   * Can perform payments to users?
   */
  user?: boolean;
}
