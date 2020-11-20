/* tslint:disable */
import { AccountBalanceEntry } from './account-balance-entry';
import { AccountWithHistoryStatus } from './account-with-history-status';
import { Entity } from './entity';
import { TimeInterval } from './time-interval';

/**
 * The result for an account balance history request
 */
export interface AccountBalanceHistoryResult extends Entity {
  account?: AccountWithHistoryStatus;

  /**
   * Each data point
   */
  balances?: Array<AccountBalanceEntry>;

  /**
   * The actually used interval between data points. Specially useful when no interval is passed as parameter, and one is assumed.
   */
  interval?: TimeInterval;
}
