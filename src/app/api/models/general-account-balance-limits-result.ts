/* tslint:disable */
import { AccountBalanceLimitsResult } from './account-balance-limits-result';
import { User } from './user';

/**
 * Result for the list of a general search of account balance limits
 */
export interface GeneralAccountBalanceLimitsResult extends AccountBalanceLimitsResult {
  user?: User;
}
