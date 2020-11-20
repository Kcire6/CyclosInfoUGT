/* tslint:disable */
import { AccountWithCurrency } from './account-with-currency';
import { BaseAccountPaymentLimits } from './base-account-payment-limits';

/**
 * Result for the list of user account payment limits
 */
export interface AccountPaymentLimitsResult extends BaseAccountPaymentLimits {
  account?: AccountWithCurrency;
}
