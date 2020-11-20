/* tslint:disable */
import { CreateVoucher } from './create-voucher';

/**
 * Parameters for generate vouchers
 */
export interface GenerateVoucher extends CreateVoucher {

  /**
   * The vouchers owner. If not given, the vouchers are generated without owner.
   */
  user?: string;
}
