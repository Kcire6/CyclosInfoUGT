/* tslint:disable */
import { BaseUserDataForSearch } from './base-user-data-for-search';
import { Group } from './group';
import { User } from './user';
import { UserQueryFilters } from './user-query-filters';
import { UserStatusEnum } from './user-status-enum';

/**
 * Contains data with the configuration for searching users
 */
export interface UserDataForSearch extends BaseUserDataForSearch {

  /**
   * When a `broker` parameter was set when getting the data, contains the details of the broker
   */
  broker?: User;

  /**
   * The internal names of either basic or custom profile fields that are configured to be shown on the list. This actually defines the fields that will be loaded on the result. It is possible that no fields are configured to be returned on list. In this case, the result objects will have the 'display' property loaded with what is configured to be the user formatting field(s).
   */
  fieldsInList?: Array<string>;

  /**
   * Possible groups an administrator or broker can use to register users
   */
  groupsForRegistration?: Array<Group>;

  /**
   * Default query filters to search users
   */
  query?: UserQueryFilters;

  /**
   * The possible user statuses the authenticated user can use to filter the search. Only administrators or brokers over their members can filter by status (also depends on permissions)
   */
  statuses?: Array<UserStatusEnum>;
}
