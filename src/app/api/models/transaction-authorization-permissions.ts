/* tslint:disable */

/**
 * Permissions the user has over a pending payment.
 */
export interface TransactionAuthorizationPermissions {

  /**
   * The payment can be authorized.
   */
  authorize?: boolean;

  /**
   * The payment can be cenceled regardless the current authorization level.
   */
  cancel?: boolean;

  /**
   * The payment can be denied.
   */
  deny?: boolean;
}
