/* tslint:disable */

/**
 * The status of a scheduled payment
 * Possible values are:
 * - `blocked`: The scheduled payment is blocked - won't have any installment processed until being unblocked again
 * - `canceled`: The scheduled payment, as well as all open installments were canceled
 * - `closed`: The scheduled payment is closed
 * - `open`: The scheduled payment has open installments
 */
export enum ScheduledPaymentStatusEnum {
  BLOCKED = 'blocked',
  CANCELED = 'canceled',
  CLOSED = 'closed',
  OPEN = 'open'
}
