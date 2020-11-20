/* tslint:disable */
import { Group } from './group';
import { ProductAssignmentLog } from './product-assignment-log';
import { ProductWithUserAccount } from './product-with-user-account';
import { User } from './user';

/**
 * Contains the current user individually assigned products, as well as other information
 */
export interface UserProductAssignmentData {

  /**
   * If the authenticated user can assign more products to the user, this is the list of possible products to assign to the user.
   */
  assignable?: Array<ProductWithUserAccount>;
  group?: Group;

  /**
   * Products currently assigned to the user's group
   */
  groupProducts?: Array<ProductWithUserAccount>;

  /**
   * Products currently assigned to the user's group set
   */
  groupSetProducts?: Array<ProductWithUserAccount>;

  /**
   * Contains the history entries for all product assignment changes
   */
  history?: Array<ProductAssignmentLog>;

  /**
   * Either internal names or ids of currently assigned products that the logged user can unassign from the user.
   */
  unassignable?: Array<string>;
  user?: User;

  /**
   * Products currently assigned to this individual user
   */
  userProducts?: Array<ProductWithUserAccount>;
}
