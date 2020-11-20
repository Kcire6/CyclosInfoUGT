/* tslint:disable */

/**
 * How the authenticated user is related to a given user
 * Possible values are:
 * - `administrator`: The authenticated user is an administrator that manages the given user
 * - `broker`: The authenticated user is a broker of the given user
 * - `brokered`: The authenticated user is a member managed by the given broker
 * - `none`: There is no special relation between the authenticated user and the given user
 * - `owner`: The given user is an operator of the authenticated user
 * - `sameOwner`: Both the given user and the authenticated user are operators of the same owner
 * - `self`: The given user is the authenticated user
 */
export enum UserRelationshipEnum {
  ADMINISTRATOR = 'administrator',
  BROKER = 'broker',
  BROKERED = 'brokered',
  NONE = 'none',
  OWNER = 'owner',
  SAME_OWNER = 'sameOwner',
  SELF = 'self'
}
