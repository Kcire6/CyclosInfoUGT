/* tslint:disable */
import { GeneralOperatorsQueryFilters } from './general-operators-query-filters';
import { Group } from './group';
export interface GeneralOperatorsDataForSearch {

  /**
   * Default query filters to search operators
   */
  query?: GeneralOperatorsQueryFilters;

  /**
   * The groups the authenticated user can use to filter users. Admins can always filter by groups, while users depend on a permission, which can be to only view group sets, only groups or none.
   */
  userGroups?: Array<Group>;
}
