/* tslint:disable */

/**
 * Permissions over own operators
 */
export interface OperatorsPermissions {

  /**
   * Whether operators are enabled
   */
  enable?: boolean;

  /**
   * Whether I can manage my own operator groups
   */
  manageGroups?: boolean;

  /**
   * Whether I can manage my own operators
   */
  manageOperators?: boolean;
}
