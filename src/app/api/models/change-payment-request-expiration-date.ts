/* tslint:disable */

/**
 * Parameters for changing the payment request expiration date.
 */
export interface ChangePaymentRequestExpirationDate {

  /**
   * A comment the payee can set.
   */
  comments?: string;

  /**
   * The new payment request expiration date.
   */
  newExpirationDate?: string;
}
