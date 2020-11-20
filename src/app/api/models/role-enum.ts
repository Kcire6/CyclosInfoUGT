/* tslint:disable */

/**
 * The main role the user has.
 * Possible values are:
 * - `administrator`: A user who can manage the system and other users.
 * - `broker`: A user who can manage other users.
 * - `member`: A regular user who can manage operators.
 * - `operator`: A "sub-user" created by a member to manage his data.
 */
export enum RoleEnum {
  ADMINISTRATOR = 'administrator',
  BROKER = 'broker',
  MEMBER = 'member',
  OPERATOR = 'operator'
}
