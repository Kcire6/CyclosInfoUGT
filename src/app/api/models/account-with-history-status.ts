/* tslint:disable */
import { AccountHistoryStatus } from './account-history-status';
import { AccountWithOwnerAndCurrency } from './account-with-owner-and-currency';

/**
 * Account data plus account history status information
 */
export interface AccountWithHistoryStatus extends AccountWithOwnerAndCurrency {
  status?: AccountHistoryStatus;
}
