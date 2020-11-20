/* tslint:disable */

/**
 * Permissions for the marketplace for the logged user
 */
export interface MyMarketplacePermissions {

  /**
   * Are advertisements enabled? Only returned if there is an authenticated user.
   */
  enable?: boolean;

  /**
   * Can manage own advertisements? Only returned if there is an authenticated user.
   */
  manage?: boolean;

  /**
   * Are questions enabled? Only returned if there is an authenticated user.
   */
  questions?: boolean;
}
