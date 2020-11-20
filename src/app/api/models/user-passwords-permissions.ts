/* tslint:disable */

/**
 * Permissions over passwords of a given user
 */
export interface UserPasswordsPermissions {

  /**
   * Can the authenticated administrator or broker manage the password(s) of the given user?
   */
  manage?: boolean;

  /**
   * Can the authenticated administrator or broker reset the user's security question, so that the user can set it again?
   */
  resetSecurityQuestion?: boolean;
}
