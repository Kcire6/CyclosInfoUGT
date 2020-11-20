/* tslint:disable */

/**
 * Permissions over other users
 */
export interface UsersPermissions {

  /**
   * Permission to view the user map directory
   */
  map?: boolean;

  /**
   * Is the authenticated user an administrator that can register users?
   */
  registerAsAdmin?: boolean;

  /**
   * Is the authenticated user a broker that can register users?
   */
  registerAsBroker?: boolean;

  /**
   * Is the authenticated user a user that can register other users?
   */
  registerAsMember?: boolean;

  /**
   * Permission to search other users
   */
  search?: boolean;

  /**
   * General permission to view the profile of other users. A fine-grained permission over specific groups can be configured. When attempting to view the profile of a user without permission, only very basic information is returned instead.
   */
  viewProfile?: boolean;
}
