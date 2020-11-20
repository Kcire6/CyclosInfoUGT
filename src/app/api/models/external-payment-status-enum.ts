/* tslint:disable */

/**
 * The status of an external payment
 * Possible values are:
 * - `canceled`: The external payment was canceled
 * - `expired`: The external payment has expired without the destination user activation
 * - `failed`: The external payment has failed processing
 * - `pending`: The external payment is pending, awaiting the destination user to be activated in Cyclos
 * - `processed`: The external payment was processed, and the destination payment was created
 */
export enum ExternalPaymentStatusEnum {
  CANCELED = 'canceled',
  EXPIRED = 'expired',
  FAILED = 'failed',
  PENDING = 'pending',
  PROCESSED = 'processed'
}
