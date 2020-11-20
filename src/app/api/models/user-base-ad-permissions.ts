/* tslint:disable */

/**
 * Permissions over advertisements of other users
 */
export interface UserBaseAdPermissions {

  /**
   * Can manage advertisements of others? Only returned if there is an authenticated user.
   */
  manage?: boolean;

  /**
   * Can manage pending advertisements of others? Only returned if there is an authenticated manager with permissions
   */
  managePending?: boolean;

  /**
   * Can purchase webshop ads? Only returned if there is an authenticated user. It is false for simple ads.
   */
  purchase?: boolean;

  /**
   * Can view advertisements of others?
   */
  view?: boolean;

  /**
   * Can view pending advertisements of others? Only returned if there is an authenticated manager with permissions
   */
  viewPending?: boolean;
}
