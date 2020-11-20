/* tslint:disable */
import { AccountPaymentLimitsResult } from './account-payment-limits-result';
import { User } from './user';

/**
 * Result for the list of a general search of account payment limits
 */
export interface GeneralAccountPaymentLimitsResult extends AccountPaymentLimitsResult {
  user?: User;
}
