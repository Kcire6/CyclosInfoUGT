/* tslint:disable */

/**
 * Possible actions that could be confirmed with a device for a scheduled payment
 * Possible values are:
 * - `block`: Block the scheduled payment
 * - `cancel`: Cancel the scheduled payment
 * - `settle`: Settle the scheduled payment
 * - `unblock`: Unblock the scheduled payment
 */
export enum ScheduledPaymentActionEnum {
  BLOCK = 'block',
  CANCEL = 'cancel',
  SETTLE = 'settle',
  UNBLOCK = 'unblock'
}
