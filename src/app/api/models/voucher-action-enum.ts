/* tslint:disable */

/**
 * Possible actions that could be confirmed with a device for a voucher
 * Possible values are:
 * - `cancel`: Cancel the voucher
 * - `changeExpiration`: Change the expiration date of a voucher
 */
export enum VoucherActionEnum {
  CANCEL = 'cancel',
  CHANGE_EXPIRATION = 'changeExpiration'
}
