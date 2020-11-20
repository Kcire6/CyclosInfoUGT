/* tslint:disable */
import { EntityReference } from './entity-reference';

/**
 * Permissions over products of a given user
 */
export interface UserProductsPermissions {

  /**
   * The products assigned to the user's group
   */
  group?: Array<EntityReference>;

  /**
   * The products assigned to the user's group set
   */
  groupSet?: Array<EntityReference>;

  /**
   * The individual products assigned to the user
   */
  individual?: Array<EntityReference>;

  /**
   * Can the authenticated user view assigned products?
   */
  view?: boolean;
}
