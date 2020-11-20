/* tslint:disable */
import { Group } from './group';
import { UserAlertQueryFilters } from './user-alert-query-filters';

/**
 * Contains data for searching user alerts
 */
export interface UserAlertDataForSearch {

  /**
   * The groups the authenticated user can use to filter users.
   */
  groups?: Array<Group>;
  query?: UserAlertQueryFilters;
}
