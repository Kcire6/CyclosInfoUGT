/* tslint:disable */
import { QueryFilters } from './query-filters';
import { VoucherRelationEnum } from './voucher-relation-enum';
import { VoucherStatusEnum } from './voucher-status-enum';

/**
 * Definitions for searching vouchers of a user
 */
export interface UserVouchersQueryFilters extends QueryFilters {

  /**
   * The minimum / maximum voucher amount
   */
  amountRange?: Array<string>;

  /**
   * The minimum / maximum voucher creation date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  creationPeriod?: Array<string>;

  /**
   * The minimum / maximum voucher expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  expirationPeriod?: Array<string>;

  /**
   * The user who perform the redeem action. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, `'1234567890`;
   */
  redeemBy?: string;

  /**
   * The minimum / maximum voucher redeem date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  redeemPeriod?: Array<string>;
  relation?: VoucherRelationEnum;
  statuses?: Array<VoucherStatusEnum>;

  /**
   * The voucher token (with or without mask)
   */
  token?: string;

  /**
   * The ids or internal names of voucher types
   */
  types?: Array<string>;
}
