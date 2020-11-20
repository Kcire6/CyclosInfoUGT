/* tslint:disable */

/**
 * Permissions over user sessions
 */
export interface SessionsPermissions {

  /**
   * Whether the logged user can disconnect users or not
   */
  disconnect?: boolean;

  /**
   * Whether the logged user can login (i.e create a session) users or not
   */
  login?: boolean;

  /**
   * Whether the logged user can view connected users or not
   */
  view?: boolean;
}
