/* tslint:disable */

/**
 * Additional data to redeem a voucher
 */
export interface RedeemVoucher {

  /**
   * Holds the custom field values for the redeem payment, keyed by field internal name or id. The format of the value depends on the custom field type.
   */
  customValues?: { [key: string]: string };
}
