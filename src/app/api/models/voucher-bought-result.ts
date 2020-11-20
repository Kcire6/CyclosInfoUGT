/* tslint:disable */
import { VoucherStatusEnum } from './voucher-status-enum';

/**
 * Result of buying vouchers
 */
export interface VoucherBoughtResult {

  /**
   * The status of all bought vouchers.
   */
  voucherStatus?: VoucherStatusEnum;

  /**
   * The identifiers of all bought vouchers.
   */
  vouchers?: Array<string>;
}
