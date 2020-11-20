/* tslint:disable */

/**
 * The ways a voucher is related to an user
 * Possible values are:
 * - `bought`: A voucher the user has bought
 * - `redeemed`: A voucher the user has redeemed
 */
export enum VoucherRelationEnum {
  BOUGHT = 'bought',
  REDEEMED = 'redeemed'
}
