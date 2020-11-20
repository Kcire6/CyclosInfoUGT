/* tslint:disable */
import { BuyVoucherErrorCode } from './buy-voucher-error-code';
import { Currency } from './currency';
import { Error } from './error';
import { PaymentError } from './payment-error';

/**
 * Error when buying a voucher
 */
export interface BuyVoucherError extends Error {

  /**
   * Indicates the maximum amount the user can buy this time without exceeding the maximum. Only if `code` is `maxAmountForPeriod`.
   */
  amountLeftForBuying?: string;
  code?: BuyVoucherErrorCode;

  /**
   * Currency reference. Only if `code` is `maxAmountForPeriod` or `maxTotalOpenAmount`
   */
  currency?: Currency;

  /**
   * Indicates the current total amount that is open. Only if `code` is `maxOpenAmount` or `maxTotalOpenAmount`.
   */
  currentOpenAmount?: string;

  /**
   * Indicates the date this user will be able to buy vouchers again for this type. Only if `code` is `maxAmountForPeriod`.
   */
  dateAllowedAgain?: string;

  /**
   * Indicates the maximum total open amount. Only if `code` is `maxOpenAmount` or `maxTotalOpenAmount`.
   */
  maxOpenAmount?: string;

  /**
   * The `PaymentError` generated when the voucher payment was being created. Only if `code` is `payment`.
   */
  paymentError?: PaymentError;
}
