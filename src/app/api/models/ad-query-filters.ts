/* tslint:disable */
import { BasicAdQueryFilters } from './basic-ad-query-filters';

/**
 * Definitions for a general advertisements search
 */
export interface AdQueryFilters extends BasicAdQueryFilters {

  /**
   * Use `brokers` instead.
   *
   * @deprecated
   */
  broker?: string;

  /**
   * Either ids or an identifications, such as login name, e-mail, etc, for the brokers of the advertisement owner. Can only be used when searching with a broker himself or admin.
   */
  brokers?: Array<string>;

  /**
   * Array of either id or internal names of user groups the advertisement owner must belong to
   */
  groups?: Array<string>;

  /**
   * Use `user` instead.
   *
   *
   * Either id or an identification, such as login name, e-mail, etc, for the advertisement owner. The allowed identification methods are those the authenticated user can use on keywords search.
   *
   * @deprecated
   */
  owner?: string;

  /**
   * Whether to return the editable property. Passing `true` will impact the performance a bit, as for each returned advertisement some statuses and permissions need to be checked.
   */
  returnEditable?: boolean;

  /**
   * Either id or an identification, such as login name, e-mail, etc, for the advertisement owner. The allowed identification methods are those the authenticated user can use on keywords search.
   */
  user?: string;
}
