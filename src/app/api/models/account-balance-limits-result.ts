/* tslint:disable */
import { AccountWithCurrency } from './account-with-currency';
import { BaseAccountBalanceLimits } from './base-account-balance-limits';

/**
 * Result for the list of user account balance limits
 */
export interface AccountBalanceLimitsResult extends BaseAccountBalanceLimits {
  account?: AccountWithCurrency;
}
