/* tslint:disable */

/**
 * Status information for an account
 */
export interface AccountStatus {

  /**
   * The balance aging counter
   */
  aRate?: string;

  /**
   * The available balance to be used, taking into account the raw balance, credit limit and reserved amount
   */
  availableBalance?: string;

  /**
   * The raw account balance
   */
  balance?: string;

  /**
   * The maximum negative balance an account may get
   */
  creditLimit?: string;

  /**
   * The balance maturity
   */
  dRate?: string;

  /**
   * If the account is negative, contains the date since it became so
   */
  negativeSince?: string;
  rateBalanceCorrection?: string;

  /**
   * The reserved amount is part of the raw balance, but cannot be used for payments because of some other events, like payments pending authorization, confirmed webshop orders, scheduled payments (when configured to reserve the total amount) and so on.
   */
  reservedAmount?: string;

  /**
   * The maximum positive balance an account may get
   */
  upperCreditLimit?: string;
  virtualRatedBalance?: string;
}
