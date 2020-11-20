/* tslint:disable */
import { EntityReference } from './entity-reference';
import { User } from './user';

/**
 * Contains, besides the user's operator groups, additional data for their management
 */
export interface UserOperatorGroupsListData {

  /**
   * Indicates whether the authenticated user can create a new operator groups for this user
   */
  canCreate?: boolean;

  /**
   * Indicates whether the operator groups can be edited by the authenticated user
   */
  canEdit?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Indicates whether the operator groups can be managed by the authenticated user
   *
   * @deprecated
   */
  canManage?: boolean;

  /**
   * The operator groups list
   */
  operatorGroups?: Array<EntityReference>;
  user?: User;
}
