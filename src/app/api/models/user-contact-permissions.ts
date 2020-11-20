/* tslint:disable */

/**
 * Permissions regarding the contact list
 */
export interface UserContactPermissions {

  /**
   * Can the current user be added to the contact list?
   */
  add?: boolean;

  /**
   * Can the current user be removed from the contact list?
   */
  remove?: boolean;
}
