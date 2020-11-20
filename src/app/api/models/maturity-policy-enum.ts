/* tslint:disable */

/**
 * Indicates how a this payment type restricts payments based on the balance maturity
 * Possible values are:
 * - `always`: The payment can always be performed, regardless its maturity
 * - `history`: It the balance maturity ever reached zero in the past, that balance can be used on payment. If later on the maturity went above zero, that new balance cannot be used. Is normally used in conjunction with the maturity table, so the user can pick the balance from past maturity
 * - `zero`: The payment can only be performed if the current maturity is zero
 */
export enum MaturityPolicyEnum {
  ALWAYS = 'always',
  HISTORY = 'history',
  ZERO = 'zero'
}
