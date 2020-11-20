/* tslint:disable */

/**
 * Permissions for payment requests over a user
 */
export interface UserPaymentRequestsPermissions {

  /**
   * Can the authenticated administrator or broker send payment requests in behalf of the given user to system?
   */
  sendAsUserToSystem?: boolean;

  /**
   * Can the authenticated administrator or broker send payment requests in behalf of the given user to other users?
   */
  sendAsUserToUser?: boolean;

  /**
   * Can the authenticated administrator send a payment request from system to the given user?
   */
  sendFromSystem?: boolean;

  /**
   * Can the authenticated user send a payment request to the given user?
   */
  sendFromUser?: boolean;

  /**
   * Can the authenticated administrator or broker view payment requests of the given user?
   */
  view?: boolean;
}
