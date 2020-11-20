/* tslint:disable */
import { VoucherPermissions } from './voucher-permissions';

/**
 * Permissions over voucher configurations
 */
export interface VouchersPermissions {

  /**
   * Permissions over each voucher configuration
   */
  vouchers?: Array<VoucherPermissions>;
}
