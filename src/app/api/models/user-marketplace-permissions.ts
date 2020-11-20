/* tslint:disable */
import { UserBaseAdPermissions } from './user-base-ad-permissions';
import { UserWebshopPermissions } from './user-webshop-permissions';

/**
 * Permissions over a user marketplace
 */
export interface UserMarketplacePermissions {

  /**
   * Use `simple.manage` instead
   *
   *
   * Can manage simple advertisements?
   *
   * @deprecated
   */
  manageAdvertisements?: boolean;

  /**
   * Can manage ad interests? Only returned if there is an authenticated user.
   */
  manageInterests?: boolean;

  /**
   * Use `webshop.manage` instead
   *
   *
   * Can manage webshop advertisements?
   *
   * @deprecated
   */
  manageWebshop?: boolean;

  /**
   * Permissions over simple advertisements
   */
  simple?: UserBaseAdPermissions;

  /**
   * Use `simple.view` instead
   *
   *
   * Can view simple advertisements?
   *
   * @deprecated
   */
  viewAdvertisements?: boolean;

  /**
   * Can view ad interests? Only returned if there is an authenticated user.
   */
  viewInterests?: boolean;

  /**
   * Use `webshop.viewPurchases` instead
   *
   *
   * Can view the purchases?
   *
   * @deprecated
   */
  viewPurchases?: boolean;

  /**
   * Use `webshop.viewSales` instead
   *
   *
   * Can view the sales?
   *
   * @deprecated
   */
  viewSales?: boolean;

  /**
   * Use `webshop.view` instead
   *
   *
   * Can view webshop advertisements?
   *
   * @deprecated
   */
  viewWebshop?: boolean;

  /**
   * Permissions over webshop ads
   */
  webshop?: UserWebshopPermissions;
}
