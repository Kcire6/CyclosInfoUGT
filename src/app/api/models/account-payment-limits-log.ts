/* tslint:disable */
import { BaseAccountPaymentLimits } from './base-account-payment-limits';
import { User } from './user';

/**
 * Log of a payment limits change
 */
export interface AccountPaymentLimitsLog extends BaseAccountPaymentLimits {
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
