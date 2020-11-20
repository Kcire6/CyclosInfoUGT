/* tslint:disable */
import { AccountBalanceLimitsLog } from './account-balance-limits-log';
import { AccountWithCurrency } from './account-with-currency';
import { BaseAccountBalanceLimits } from './base-account-balance-limits';
import { PasswordInput } from './password-input';
import { User } from './user';

/**
 * Data regarding the lower and upper limits of a user account.
 */
export interface AccountBalanceLimitsData extends BaseAccountBalanceLimits {
  account?: AccountWithCurrency;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * The default credit limit from the user products.
   */
  defaultCreditLimit?: string;

  /**
   * The default upper credit limit from the user products.
   */
  defaultUpperCreditLimit?: string;

  /**
   * Can the authenticated user manage the limits of this account?
   */
  editable?: boolean;

  /**
   * The history of balance limit changes.
   */
  history?: Array<AccountBalanceLimitsLog>;
  user?: User;
}
