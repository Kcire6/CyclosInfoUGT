/* tslint:disable */

/**
 * Basic data regarding the payment, daily, weekly and monthly amount limits of a user account.
 */
export interface BaseAccountPaymentLimits {

  /**
   * The payment amount limit. When this value is `null` the account has no payment amount limit (is unlimited).
   */
  amountLimit?: string;

  /**
   * The payment amount per day limit. When this value is `null` the account has no payment amount per day limit (is unlimited).
   */
  amountPerDayLimit?: string;

  /**
   * The payment amount per month limit. When this value is `null` the account has no payment amount per month limit (is unlimited).
   */
  amountPerMonthLimit?: string;

  /**
   * The payment amount per week limit. When this value is `null` the account has no payment amount per week limit (is unlimited).
   */
  amountPerWeekLimit?: string;

  /**
   * Indicates whether the `amountLimit` is customized for this account or if it is from the product.
   */
  customAmountLimit?: boolean;

  /**
   * Indicates whether the `amountPerDayLimit` is customized for this account or if it is from the product.
   */
  customAmountPerDayLimit?: boolean;

  /**
   * Indicates whether the `amountPerMonthLimit` is customized for this account or if it is from the product.
   */
  customAmountPerMonthLimit?: boolean;

  /**
   * Indicates whether the `amountPerWeekLimit` is customized for this account or if it is from the product.
   */
  customAmountPerWeekLimit?: boolean;
}
