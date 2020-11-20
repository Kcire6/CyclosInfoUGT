/* tslint:disable */
import { BaseReferenceDataForSearch } from './base-reference-data-for-search';
import { Reference } from './reference';
import { User } from './user';
import { UserReferenceQueryFilters } from './user-reference-query-filters';

/**
 * Data for searching references of a given user
 */
export interface UserReferenceDataForSearch extends BaseReferenceDataForSearch {

  /**
   * The current reference, if any, from the authenticated user to the given user
   */
  current?: Reference;

  /**
   * Default query filters
   */
  query?: UserReferenceQueryFilters;

  /**
   * Can the authenticated user set a reference to the given user?
   */
  set?: boolean;
  user?: User;
}
