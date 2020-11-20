/* tslint:disable */
import { BaseReferenceQueryFilters } from './base-reference-query-filters';
import { ReferenceDirectionEnum } from './reference-direction-enum';

/**
 * Query filters for a user's references
 */
export interface UserReferenceQueryFilters extends BaseReferenceQueryFilters {
  direction?: ReferenceDirectionEnum;

  /**
   * The user that either gave or received the reference to the user specified in the path. Should be either the id or some other allowed identification (login name, email, etc).
   */
  relatedUser?: string;
}
