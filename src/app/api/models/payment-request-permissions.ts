/* tslint:disable */

/**
 * Permissions the user has over a payment request.
 */
export interface PaymentRequestPermissions {

  /**
   * The payment request can be accepted by the payer.
   */
  accept?: boolean;

  /**
   * The payment request can be canceled by the payee or managers.
   */
  cancel?: boolean;

  /**
   * The payment request expiration date can be changed by the payee or managers.
   */
  changeExpiration?: boolean;

  /**
   * The payment request can be rejected by the payer.
   */
  reject?: boolean;

  /**
   * The payment request can be rescheduled by the payee or managers.
   */
  reschedule?: boolean;
}
