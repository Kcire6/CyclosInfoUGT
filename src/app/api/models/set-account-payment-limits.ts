/* tslint:disable */
import { BaseAccountPaymentLimits } from './base-account-payment-limits';

/**
 * Parameters for setting the new account payment limits.
 */
export interface SetAccountPaymentLimits extends BaseAccountPaymentLimits {

  /**
   * Comments supplied by the manager regarding the limit change.
   */
  comment?: string;
}
