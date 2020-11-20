/* tslint:disable */
import { User } from './user';
import { VoucherBasicData } from './voucher-basic-data';

/**
 * Data used to redeem a voucher
 */
export interface VoucherDataForRedeem extends VoucherBasicData {

  /**
   * The voucher amount
   */
  amount?: string;

  /**
   * The voucher buyer, if any and visible
   */
  buyer?: User;

  /**
   * The formatted voucher token
   */
  token?: string;
}
