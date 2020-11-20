/* tslint:disable */

/**
 * Basic data regarding the lower and upper limits of a user account.
 */
export interface BaseAccountBalanceLimits {

  /**
   * The lower (negative) credit limit.
   */
  creditLimit?: string;

  /**
   * Indicates whether the credit limit is customized for this account or if it is the default value.
   */
  customCreditLimit?: boolean;

  /**
   * Indicates whether the upper credit limit is customized for this account or if it is the default value.
   */
  customUpperCreditLimit?: boolean;

  /**
   * The upper (positive) credit limit. When this value is `null` the account has no upper limit (is unlimited).
   */
  upperCreditLimit?: string;
}
