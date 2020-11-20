/* tslint:disable */
import { EntityReference } from './entity-reference';
import { User } from './user';
import { UserVouchersQueryFilters } from './user-vouchers-query-filters';

/**
 * Contains configuration data for searching vouchers of a user
 */
export interface UserVouchersDataForSearch {

  /**
   * The input mask for voucher tokens. Optional.
   */
  mask?: string;

  /**
   * When searching for redeemed vouchers, the operators of the redeemer.
   */
  operators?: Array<User>;
  query?: UserVouchersQueryFilters;

  /**
   * The voucher types that can be used for searching
   */
  types?: Array<EntityReference>;
  user?: User;
}
