/* tslint:disable */
import { QueryFilters } from './query-filters';
import { VoucherCreationTypeEnum } from './voucher-creation-type-enum';
import { VoucherOrderByEnum } from './voucher-order-by-enum';
import { VoucherStatusEnum } from './voucher-status-enum';

/**
 * Definitions for searching vouchers as admin
 */
export interface VouchersQueryFilters extends QueryFilters {

  /**
   * The minimum / maximum voucher amount
   */
  amountRange?: Array<string>;

  /**
   * The buyer of the voucher. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, `'1234567890`;
   */
  buyer?: string;

  /**
   * The ids or internal names of buyers groups
   */
  buyerGroups?: Array<string>;

  /**
   * The minimum / maximum voucher creation date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  creationPeriod?: Array<string>;
  creationType?: VoucherCreationTypeEnum;

  /**
   * The minimum / maximum voucher expiration date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  expirationPeriod?: Array<string>;
  orderBy?: VoucherOrderByEnum;

  /**
   * If it is passed, filter if the voucher was printed or not.
   */
  printed?: boolean;

  /**
   * The minimum / maximum voucher redeem date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  redeemPeriod?: Array<string>;

  /**
   * The redeemer of the voucher. A user identification value, such as id, username, e-mail, phone, etc. Id is always allowed, others depend on Cyclos configuration. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, `'1234567890`;
   */
  redeemer?: string;

  /**
   * The ids or internal names of redeemers groups
   */
  redeemerGroups?: Array<string>;
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
