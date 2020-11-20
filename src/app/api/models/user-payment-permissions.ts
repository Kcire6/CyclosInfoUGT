/* tslint:disable */

/**
 * Permissions for payments regarding a user
 */
export interface UserPaymentPermissions {

  /**
   * Can the authenticated administrator or broker perform a payment in behalf of this user to another account belonging to the same user?
   */
  asUserToSelf?: boolean;

  /**
   * Can the authenticated administrator or broker perform a payment in behalf of this user to a system account?
   */
  asUserToSystem?: boolean;

  /**
   * Can the authenticated administrator or broker perform a payment in behalf of this user to another user?
   */
  asUserToUser?: boolean;

  /**
   * Can the authenticated administrator perform a payment from a system account to this user?
   */
  systemToUser?: boolean;

  /**
   * Can the authenticated member perform a payment from an himself to this user?
   */
  userToUser?: boolean;
}
