/* tslint:disable */

/**
 * Permissions regarding the user's operators and operator groups
 */
export interface UserOperatorsPermissions {

  /**
   * Can the authenticated user view the operator groups of this user?
   */
  viewGroups?: boolean;

  /**
   * Can the authenticated user view the operators of this user?
   */
  viewOperators?: boolean;
}
