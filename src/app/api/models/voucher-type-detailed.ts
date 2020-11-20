/* tslint:disable */
import { Group } from './group';
import { User } from './user';
import { VoucherType } from './voucher-type';

/**
 * Reference to a voucher type and add extra information.
 */
export interface VoucherTypeDetailed extends VoucherType {

  /**
   * The list of goups allowed as redeemers. And empty list means all groups with permissions are allowed. Only this list or the `redeemAllowedUsers` list can be not null at the same time.
   */
  redeemAllowedGroups?: Array<Group>;

  /**
   * The list of users allowed as redeemers. An empty list means all users with permissions are allowed. Only this list or the `redeemAllowedGroups` list can be not null at the same time.
   */
  redeemAllowedUsers?: Array<User>;

  /**
   * The voucher description
   */
  voucherDescription?: string;

  /**
   * The voucher title
   */
  voucherTitle?: string;
}
