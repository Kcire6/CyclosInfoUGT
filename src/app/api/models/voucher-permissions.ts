/* tslint:disable */
import { VoucherConfiguration } from './voucher-configuration';

/**
 * Permissions over vouchers
 */
export interface VoucherPermissions {

  /**
   * Whether the logged user can buy vouchers of types belonging to this configuration
   */
  buy?: boolean;

  /**
   * Whether the logged user can cancel vouchers of types belonging to this configuration. Only if the authenticated user is an admin. Otherwise `false`.
   */
  cancel?: boolean;

  /**
   * Whether the logged user can change the expiration date of vouchers of types belonging to this configuration. Only if the authenticated user is an admin. Otherwise `false`.
   */
  changeExpirationDate?: boolean;
  configuration?: VoucherConfiguration;

  /**
   * Whether the logged user has enabled the types belonging to this configuration. Only if the authenticated user is a member. Otherwise `false`.
   */
  enabled?: boolean;

  /**
   * Whether the logged user can generate vouchers of types belonging to this configuration. Only if the authenticated user is an admin. Otherwise `false`.
   */
  generate?: boolean;

  /**
   * Whether the logged user can redeem vouchers of types belonging to this configuration
   */
  redeem?: boolean;

  /**
   * Whether the logged user can refund vouchers of types belonging to this configuration.
   */
  refund?: boolean;

  /**
   * Whether the logged user can view vouchers of types belonging to this configuration. Only if the authenticated user is an admin. Otherwise `false`.
   */
  view?: boolean;

  /**
   * Whether the logged user can view vouchers bought of types belonging to this configuration. Only if the authenticated user is a member or broker. Otherwise `false`.
   */
  viewBought?: boolean;

  /**
   * Whether the logged user can view vouchers redeemed of types belonging to this configuration. Only if the authenticated user is a member or broker. Otherwise `false`.
   */
  viewRedeemed?: boolean;
}
