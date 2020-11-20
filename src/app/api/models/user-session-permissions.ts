/* tslint:disable */

/**
 * Permissions regarding the login session of a given user
 */
export interface UserSessionPermissions {

  /**
   * Can the authenticated admin disconnect this user?
   */
  disconnect?: boolean;
}
