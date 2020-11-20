/* tslint:disable */
import { User } from './user';

/**
 * Initial data used to redeem vouchers
 */
export interface VoucherInitialDataForRedeem {

  /**
   * The voucher token mask
   */
  mask?: string;
  user?: User;
}
