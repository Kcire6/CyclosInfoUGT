/* tslint:disable */
import { CreateVoucher } from './create-voucher';

/**
 * Parameters for buying vouchers
 */
export interface BuyVoucher extends CreateVoucher {

  /**
   * Holds the payment custom field values, keyed by field internal name or id. The format of the value depends on the custom field type.
   */
  customValues?: { [key: string]: string };
}
