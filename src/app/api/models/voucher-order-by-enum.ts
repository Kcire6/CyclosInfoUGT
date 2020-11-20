/* tslint:disable */

/**
 * The voucher search result order
 * Possible values are:
 * - `creationDateAsc`: Order by creation date, ascending
 * - `creationDateDesc`: Order by creation date, descending (default)
 * - `expirationDateAsc`: Order by expiration date, ascending
 * - `expirationDateDesc`: Order by expiration date, descending
 * - `redeemDateAsc`: Order by redeem date, ascending, then expiration date, ascending
 * - `redeemDateDesc`: Order by redeem date, descending, then expiration date, descending
 */
export enum VoucherOrderByEnum {
  CREATION_DATE_ASC = 'creationDateAsc',
  CREATION_DATE_DESC = 'creationDateDesc',
  EXPIRATION_DATE_ASC = 'expirationDateAsc',
  EXPIRATION_DATE_DESC = 'expirationDateDesc',
  REDEEM_DATE_ASC = 'redeemDateAsc',
  REDEEM_DATE_DESC = 'redeemDateDesc'
}
