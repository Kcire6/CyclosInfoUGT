/* tslint:disable */
import { BaseAccountBalanceLimits } from './base-account-balance-limits';
import { User } from './user';

/**
 * Log of a balance limits change
 */
export interface AccountBalanceLimitsLog extends BaseAccountBalanceLimits {
  by?: User;

  /**
   * Comments supplied by the manager that performed the limit change.
   */
  comment?: string;

  /**
   * The date the limit change was performed
   */
  date?: string;
}
