/* tslint:disable */
import { MyMarketplacePermissions } from './my-marketplace-permissions';
import { UserBaseAdPermissions } from './user-base-ad-permissions';

/**
 * Permissions for the marketplace
 */
export interface MarketplacePermissions {

  /**
   * Are ad interests enabled? Only returned if there is an authenticated user.
   */
  interests?: boolean;

  /**
   * Use `mySimple.manage` instead
   *
   *
   * Can manage own simple advertisements? Only returned if there is an authenticated user.
   *
   * @deprecated
   */
  manageOwnAdvertisements?: boolean;

  /**
   * Simple advertisement permissions for the logged user. Only returned if there is an authenticated user.
   */
  mySimple?: MyMarketplacePermissions;

  /**
   * Webshop ad permissions for the logged user. Only returned if there is an authenticated user.
   */
  myWebshop?: MyMarketplacePermissions;

  /**
   * Use `mySimple.enable` instead
   *
   *
   * Can own simple advertisements? Only returned if there is an authenticated user.
   *
   * @deprecated
   */
  ownAdvertisements?: boolean;

  /**
   * Use `userWebshop.purchase` instead
   *
   *
   * Can buy webwop ads? Only returned if there is an authenticated user.
   *
   * @deprecated
   */
  purchase?: boolean;

  /**
   * Use `mySimple.questions` instead.
   *
   *
   * Are simple advertisements questions enabled? Only returned if there is an authenticated user.
   *
   * @deprecated
   */
  questions?: boolean;

  /**
   * Use `userSimple.view` or `userWebshop.view` instead
   *
   *
   * Can search for simple and webshop advertisements?
   *
   * @deprecated
   */
  search?: boolean;

  /**
   * Permissions over simple advertisements of other users
   */
  userSimple?: UserBaseAdPermissions;

  /**
   * Permissions over webshop ads of other users
   */
  userWebshop?: UserBaseAdPermissions;

  /**
   * Use `userSimple.view` instead
   *
   *
   * Can view simple advertisements? Only returned if there is an authenticated user.
   *
   * @deprecated
   */
  viewAdvertisements?: boolean;

  /**
   * Use `userWebshop.view` instead
   *
   *
   * Can view webshop advertisements? Only returned if there is an authenticated user.
   *
   * @deprecated
   */
  viewWebshop?: boolean;
}
