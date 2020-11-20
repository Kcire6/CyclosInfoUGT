/* tslint:disable */

/**
 * Permissions over a user vouchers
 */
export interface UserVouchersPermissions {

  /**
   * Can buy vouchers?
   */
  buy?: boolean;

  /**
   * Can redeem vouchers?
   */
  redeem?: boolean;

  /**
   * Can view bought vouchers?
   */
  viewBought?: boolean;

  /**
   * Can view redeemed vouchers?
   */
  viewRedeemed?: boolean;
}
