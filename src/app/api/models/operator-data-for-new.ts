/* tslint:disable */
import { BasicUserDataForNew } from './basic-user-data-for-new';
import { EntityReference } from './entity-reference';
import { OperatorNew } from './operator-new';
import { User } from './user';

/**
 * Contains data used to register an operator
 */
export interface OperatorDataForNew extends BasicUserDataForNew {

  /**
   * The available operator groups for the given owner. When a group was passed on the request, will contain only that group. If no group was passed, will return all available groups.
   */
  groups?: Array<EntityReference>;

  /**
   * The object that can be altered and posted back to register the operator
   */
  operator?: OperatorNew;

  /**
   * Details of user that will be the owner of the new operator
   */
  user?: User;
}
