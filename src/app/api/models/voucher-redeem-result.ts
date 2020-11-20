/* tslint:disable */

/**
 * Result when redeeming a voucher
 */
export interface VoucherRedeemResult {

  /**
   * The generated payment identifier
   */
  paymentId?: string;

  /**
   * The voucher identifier
   */
  voucherId?: string;
}
