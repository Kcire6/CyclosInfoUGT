/* tslint:disable */

/**
 * The status of a recurring payment
 * Possible values are:
 * - `canceled`: The recurring payment was manually canceled
 * - `closed`: The recurring payment is closed, as the last scheduled occurrence was processed
 * - `open`: The recurring payment is open, as there are more future occurrences
 */
export enum RecurringPaymentStatusEnum {
  CANCELED = 'canceled',
  CLOSED = 'closed',
  OPEN = 'open'
}
