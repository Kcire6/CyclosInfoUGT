/* tslint:disable */

/**
 * Possible errors when redeeming a voucher
 * Possible values are:
 * - `notAllowedForUser`: This user cannot redeem this voucher
 * - `notAllowedForVoucher`: This voucher cannot be redeemed
 * - `notAllowedToday`: This voucher cannot be redeemed today
 * - `notAllowedYet`: The redeem period for this voucher has not arrived yet
 * - `payment`: There was an error when performing the payment
 * - `unexpected`: An unexpected error has occurred. See the `exceptionType` and `exceptionMessage` fields for the internal information.
 * - `userBlocked`: The user has been blocked by exceeding redeem tries
 */
export enum RedeemVoucherErrorCode {
  NOT_ALLOWED_FOR_USER = 'notAllowedForUser',
  NOT_ALLOWED_FOR_VOUCHER = 'notAllowedForVoucher',
  NOT_ALLOWED_TODAY = 'notAllowedToday',
  NOT_ALLOWED_YET = 'notAllowedYet',
  PAYMENT = 'payment',
  UNEXPECTED = 'unexpected',
  USER_BLOCKED = 'userBlocked'
}
