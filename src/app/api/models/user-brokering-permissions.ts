/* tslint:disable */

/**
 * Permissions regarding the user's brokers and brokered users
 */
export interface UserBrokeringPermissions {

  /**
   * Can the authenticated user view the brokers of this user?
   */
  viewBrokers?: boolean;

  /**
   * Can the authenticated user view the assigned members of this broker?
   */
  viewMembers?: boolean;
}
