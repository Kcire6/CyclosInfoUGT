/* tslint:disable */

/**
 * Application-specific error codes for a payment error
 * Possible values are:
 * - `dailyAmountExceeded`: The maximum amount allowed per day was exceeded.
 * - `dailyPaymentsExceeded`: The maximum count of payments allowed per day was exceeded.
 * - `destinationUpperLimitReached`: The upper balance limit of the destination account was exceeded.
 * - `insufficientBalance`: The account selected for the payment does not have enough balance
 * - `monthlyAmountExceeded`: The maximum amount allowed per month was exceeded.
 * - `monthlyPaymentsExceeded`: The maximum count of payments allowed per month was exceeded.
 * - `paymentAmountExceeded`: The maximum amount allowed in the payment type was exceeded.
 * - `pos`: A POS exception has happened when performing this payment. See the `posError` field for more details.
 * - `timeBetweenPaymentsNotMet`: The minimum time between payments was not met.
 * - `unexpected`: An unexpected error has occurred. See the `exceptionType` and `exceptionMessage` fields for the internal information.
 * - `weeklyAmountExceeded`: The maximum amount allowed per week was exceeded.
 * - `weeklyPaymentsExceeded`: The maximum count of payments allowed per week was exceeded.
 * - `yearlyAmountExceeded`: The maximum amount allowed per year was exceeded.
 */
export enum PaymentErrorCode {
  DAILY_AMOUNT_EXCEEDED = 'dailyAmountExceeded',
  DAILY_PAYMENTS_EXCEEDED = 'dailyPaymentsExceeded',
  DESTINATION_UPPER_LIMIT_REACHED = 'destinationUpperLimitReached',
  INSUFFICIENT_BALANCE = 'insufficientBalance',
  MONTHLY_AMOUNT_EXCEEDED = 'monthlyAmountExceeded',
  MONTHLY_PAYMENTS_EXCEEDED = 'monthlyPaymentsExceeded',
  PAYMENT_AMOUNT_EXCEEDED = 'paymentAmountExceeded',
  POS = 'pos',
  TIME_BETWEEN_PAYMENTS_NOT_MET = 'timeBetweenPaymentsNotMet',
  UNEXPECTED = 'unexpected',
  WEEKLY_AMOUNT_EXCEEDED = 'weeklyAmountExceeded',
  WEEKLY_PAYMENTS_EXCEEDED = 'weeklyPaymentsExceeded',
  YEARLY_AMOUNT_EXCEEDED = 'yearlyAmountExceeded'
}
