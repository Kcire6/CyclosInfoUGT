/* tslint:disable */

/**
 * Possible errors when buying a voucher
 * Possible values are:
 * - `maxAmountForPeriod`: The maximum allowed buy amount for a period (example, a month) has been exceeded
 * - `maxOpenAmount`: The maximum open amount for this voucher type for the buyer user has been exceeded
 * - `maxTotalOpenAmount`: The maximum total open amount for this voucher type, for all users, has been exceeded
 * - `notAllowedForUser`: The user attempting to buy vouchers is not allowed to buy vouchers of this type
 * - `payment`: There was an error when performing the payment
 * - `unexpected`: An unexpected error has occurred. See the `exceptionType` and `exceptionMessage` fields for the internal information.
 */
export enum BuyVoucherErrorCode {
  MAX_AMOUNT_FOR_PERIOD = 'maxAmountForPeriod',
  MAX_OPEN_AMOUNT = 'maxOpenAmount',
  MAX_TOTAL_OPEN_AMOUNT = 'maxTotalOpenAmount',
  NOT_ALLOWED_FOR_USER = 'notAllowedForUser',
  PAYMENT = 'payment',
  UNEXPECTED = 'unexpected'
}
