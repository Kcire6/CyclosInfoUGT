/* tslint:disable */
import { Currency } from './currency';
import { Error } from './error';
import { PaymentErrorCode } from './payment-error-code';
import { PosError } from './pos-error';

/**
 * Error when performing a payment
 */
export interface PaymentError extends Error {
  code?: PaymentErrorCode;

  /**
   * Currency reference. Only if `code` is `dailyAmountExceeded`, `weeklyAmountExceeded` or `monthlyAmountExceeded`
   */
  currency?: Currency;

  /**
   * The maximum amount. Only if `code` is `dailyAmountExceeded`, `weeklyAmountExceeded` or `monthlyAmountExceeded`
   */
  maxAmount?: string;

  /**
   * The maximum payments count. Only if `code` is `dailyPaymentsExceeded`, `weeklyPaymentsExceeded` or `monthlyPaymentsExceeded`
   */
  maxPayments?: number;

  /**
   * The POS error details. Only if `code` is `pos`
   */
  posError?: PosError;
}
