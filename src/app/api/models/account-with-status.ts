/* tslint:disable */
import { AccountStatus } from './account-status';
import { AccountWithCurrency } from './account-with-currency';

/**
 * Account data plus status information
 */
export interface AccountWithStatus extends AccountWithCurrency {
  status?: AccountStatus;
}
