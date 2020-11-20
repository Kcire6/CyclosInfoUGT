/* tslint:disable */
import { User } from './user';
import { Voucher } from './voucher';
import { VoucherType } from './voucher-type';
import { WeekDayEnum } from './week-day-enum';

/**
 * Result of a voucher search
 */
export interface VoucherResult extends Voucher {

  /**
   * The voucher buyer. Is not returned when the voucher was generated or when searching for bought vouchers of a user.
   */
  buyer?: User;

  /**
   * The date a voucher was generated or bought
   */
  creationDate?: string;

  /**
   * The date a voucher expires
   */
  expirationDate?: string;

  /**
   * The user a generated voucher was assigned to, if any.
   */
  owner?: User;

  /**
   * The date after which the voucher can be redeemed. Is only returned if the voucher `status` is `open`.
   */
  redeemAfterDate?: string;

  /**
   * The user who perform the redeem action, could be an admin, broker or operator of the redeemer. Is not returned when the voucher was not yet redeemed or if it is the same as the redeemer.
   */
  redeemBy?: User;

  /**
   * The date a voucher was redeemed (if so)
   */
  redeemDate?: string;

  /**
   * The days of the week a voucher can be redeemed. Is only returned if the voucher `status` is `open`.
   */
  redeemOnWeekDays?: Array<WeekDayEnum>;

  /**
   * The voucher redeemer. Is not returned when the voucher was not yet redeemed or when searching for redeemed vouchers of a user.
   */
  redeemer?: User;
  type?: VoucherType;
}
