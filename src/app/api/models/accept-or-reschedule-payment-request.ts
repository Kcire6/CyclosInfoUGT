/* tslint:disable */

/**
 * Parameters for accepting or rescheduling payment requests.
 */
export interface AcceptOrReschedulePaymentRequest {

  /**
   * A comment the payer can set.
   */
  comments?: string;

  /**
   * The date the payment request must be processed.
   */
  processDate?: string;
}
