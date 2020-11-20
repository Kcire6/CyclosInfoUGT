/* tslint:disable */
import { AccountPaymentLimitsLog } from './account-payment-limits-log';
import { AccountWithCurrency } from './account-with-currency';
import { BaseAccountPaymentLimits } from './base-account-payment-limits';
import { PasswordInput } from './password-input';
import { User } from './user';

/**
 * Data regarding the payment, daily, weekly and monthly amount limits of a user account.
 */
export interface AccountPaymentLimitsData extends BaseAccountPaymentLimits {
  account?: AccountWithCurrency;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * Can the authenticated user manage the payment limits of this account?
   */
  editable?: boolean;

  /**
   * The history of payment limits changes.
   */
  history?: Array<AccountPaymentLimitsLog>;

  /**
   * The payment amount limit from the user products.
   */
  productAmountLimit?: string;

  /**
   * The payment amount per day limit from the user products.
   */
  productAmountPerDayLimit?: string;

  /**
   * The payment amount per month limit from the user products.
   */
  productAmountPerMonthLimit?: string;

  /**
   * The payment amount per week limit from the user products.
   */
  productAmountPerWeekLimit?: string;
  user?: User;
}
