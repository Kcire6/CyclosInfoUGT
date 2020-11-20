/* tslint:disable */

/**
 * Parameters for create vouchers
 */
export interface CreateVoucher {

  /**
   * The amount per voucher
   */
  amount?: string;

  /**
   * The number of vouchers to create. Defaults to 1.
   */
  count?: number;

  /**
   * Either the `id` or `internalName` of the voucher type
   */
  type?: string;
}
