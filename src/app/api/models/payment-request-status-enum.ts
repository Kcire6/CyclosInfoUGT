/* tslint:disable */

/**
 * The status of a payment request
 * Possible values are:
 * - `canceled`: The payment request was canceled
 * - `denied`: The payment request was denied by the receiver
 * - `expired`: The payment request has expired - the received did not respond until the expiration date
 * - `open`: The payment request is open and can be accepted
 * - `processed`: The payment request was processed, and either a direct or scheduled payment was created from it
 * - `scheduled`: The payment request has been accepted, and scheduled for processing on a future date
 */
export enum PaymentRequestStatusEnum {
  CANCELED = 'canceled',
  DENIED = 'denied',
  EXPIRED = 'expired',
  OPEN = 'open',
  PROCESSED = 'processed',
  SCHEDULED = 'scheduled'
}
