/* tslint:disable */
import { BaseAdDataForSearch } from './base-ad-data-for-search';
import { User } from './user';
import { UserAdsQueryFilters } from './user-ads-query-filters';

/**
 * Data for a search of advertisements of a specific user
 */
export interface UserAdsDataForSearch extends BaseAdDataForSearch {

  /**
   * Indicates whether the authenticated user can create new advertisements for this user
   */
  createNew?: boolean;

  /**
   * The maximum number of advertisements this user can have
   */
  maxAds?: number;

  /**
   * Default query filters to search advertisements of a specific user
   */
  query?: UserAdsQueryFilters;

  /**
   * Does advertisements of this user requires authorization to be published for other users to see?
   */
  requiresAuthorization?: boolean;
  user?: User;
}
