/* tslint:disable */

/**
 * The status of a ticket
 * Possible values are:
 * - `approved`: The ticket was approved by the payer and is waiting to be processed by the receiver to generate the payment
 * - `canceled`: The ticket was canceled by the receiver before being approved
 * - `expired`: The ticket has expired without being approved by a payer or canceled by the receiver until the expiration date
 * - `open`: The ticket was created, but not approved yet
 * - `processed`: The ticket was approved and processed and the payment was generated
 */
export enum TicketStatusEnum {
  APPROVED = 'approved',
  CANCELED = 'canceled',
  EXPIRED = 'expired',
  OPEN = 'open',
  PROCESSED = 'processed'
}
