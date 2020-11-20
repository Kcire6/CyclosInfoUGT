/* tslint:disable */
import { AdQueryFilters } from './ad-query-filters';
import { BaseAdDataForSearch } from './base-ad-data-for-search';
import { Group } from './group';

/**
 * Data for a general search of advertisements
 */
export interface AdDataForSearch extends BaseAdDataForSearch {

  /**
   * Use the groups returned in the query instead.
   *
   *
   * The internal names (or ids, if missing) of the groups which should be presented by default on user search
   *
   * @deprecated
   */
  defaultGroups?: Array<string>;

  /**
   * The groups the authenticated user can use to filter users. Admins can always filter by groups, while users depend on a permission, which can be to only view group sets, only groups or none.
   */
  groups?: Array<Group>;

  /**
   * Indicates whether show or not the advertisements owner to guests
   */
  hideOwner?: boolean;

  /**
   * Indicates whether show or not the advertisements price to guests
   */
  hidePrice?: boolean;

  /**
   * Default query filters to search advertisements
   */
  query?: AdQueryFilters;
}
