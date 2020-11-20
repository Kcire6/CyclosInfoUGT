/* tslint:disable */
import { AccountBalanceLimitsResult } from './account-balance-limits-result';
import { User } from './user';

/**
 * Data regarding the lower and upper limits of a user's accounts.
 */
export interface UserAccountBalanceLimitsListData {

  /**
   * The balance limits for each account
   */
  accountLimits?: Array<AccountBalanceLimitsResult>;
  user?: User;
}
