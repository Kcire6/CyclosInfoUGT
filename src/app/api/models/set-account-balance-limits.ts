/* tslint:disable */
import { BaseAccountBalanceLimits } from './base-account-balance-limits';

/**
 * Parameters for setting the new account limits.
 */
export interface SetAccountBalanceLimits extends BaseAccountBalanceLimits {

  /**
   * Comments supplied by the manager regarding  the limit change.
   */
  comment?: string;
}
