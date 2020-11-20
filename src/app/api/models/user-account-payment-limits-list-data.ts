/* tslint:disable */
import { AccountPaymentLimitsResult } from './account-payment-limits-result';
import { User } from './user';

/**
 * Data regarding the payment, daily, weekly and monthly amount limits of a user accounts.
 */
export interface UserAccountPaymentLimitsListData {

  /**
   * The payment limits for each account
   */
  accountLimits?: Array<AccountPaymentLimitsResult>;
  user?: User;
}
