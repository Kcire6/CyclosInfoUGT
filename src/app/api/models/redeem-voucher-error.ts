/* tslint:disable */
import { Error } from './error';
import { PaymentError } from './payment-error';
import { RedeemVoucherErrorCode } from './redeem-voucher-error-code';
import { VoucherStatusEnum } from './voucher-status-enum';
import { WeekDayEnum } from './week-day-enum';

/**
 * Error when redeeming a voucher
 */
export interface RedeemVoucherError extends Error {

  /**
   * Only if `code` is `notAllowedToday`
   */
  allowedDays?: Array<WeekDayEnum>;
  code?: RedeemVoucherErrorCode;

  /**
   * The `PaymentError` generated when the voucher payment was being created. Only if `code` is `payment`.
   */
  paymentError?: PaymentError;

  /**
   * Indicates the date after which this voucher can be redeemed. Only if `code` is `notAllowedYet`.
   */
  redeemAfterDate?: string;

  /**
   * Only if `code` is `notAllowedForVoucher`
   */
  voucherStatus?: VoucherStatusEnum;
}
