/* tslint:disable */
import { AccountWithStatus } from './account-with-status';
import { DecimalRange } from './decimal-range';
import { TimeInterval } from './time-interval';
import { VoucherBasicData } from './voucher-basic-data';
import { VoucherTypeDetailed } from './voucher-type-detailed';

/**
 * If a type is not specified when requesting this data only the given user data and the list of types the authenticated user can buy for it (could be himself) is returned.
 */
export interface VoucherDataForBuy extends VoucherBasicData {

  /**
   * The account from which the buy will be debited
   */
  account?: AccountWithStatus;

  /**
   * Returned if there is a minimum / maximum amount for buying
   */
  amountRange?: DecimalRange;

  /**
   * If user can buy multiple vouchers at same time
   */
  canBuyMultiple?: boolean;

  /**
   * Returned if there is a fixed amount for bought vouchers. Is kept for backwards compatibility, because the `amountRange` is enough to return this information (when `min` and `max` are the same amount)
   */
  fixedAmount?: string;

  /**
   * Returned if there is a minimum time to be elapsed before bought vouchers can be redeemed
   */
  minimumTimeToRedeem?: TimeInterval;

  /**
   * The list of voucher types the authenticated user can buy to another user (or himself). Only if no type parameter is given.
   */
  types?: Array<VoucherTypeDetailed>;
}
