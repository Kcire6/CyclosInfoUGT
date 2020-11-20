/* tslint:disable */
import { QueryFilters } from './query-filters';
import { UserStatusEnum } from './user-status-enum';

/**
 * Basic definitions for operators search filters
 */
export interface BasicOperatorQueryFilters extends QueryFilters {

  /**
   * The minimum / maximum user creation date. Only taken into account if searching as administrator or managing broker. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  creationPeriod?: Array<string>;
  statuses?: Array<UserStatusEnum>;
}
