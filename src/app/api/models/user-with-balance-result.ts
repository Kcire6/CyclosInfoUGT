/* tslint:disable */
import { BalanceLevelEnum } from './balance-level-enum';
import { UserResult } from './user-result';

/**
 * Result of a user search with balance
 */
export interface UserWithBalanceResult extends UserResult {

  /**
   * The raw account balance
   */
  balance?: string;
  balanceLevel?: BalanceLevelEnum;

  /**
   * The date since the account has been negative
   */
  negativeSince?: string;
}
