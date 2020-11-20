/* tslint:disable */
import { UserBaseAdPermissions } from './user-base-ad-permissions';

/**
 * Permissions over webshop asd of a specific user
 */
export interface UserWebshopPermissions extends UserBaseAdPermissions {

  /**
   * Can manage the webshop settings? Only returned if there is an authenticated user.
   */
  manageSettings?: boolean;

  /**
   * Can view the purchases? Only returned if there is an authenticated user.
   */
  viewPurchases?: boolean;

  /**
   * Can view the sales? Only returned if there is an authenticated user.
   */
  viewSales?: boolean;

  /**
   * Can view the webshop settings? Only returned if there is an authenticated user.
   */
  viewSettings?: boolean;
}
