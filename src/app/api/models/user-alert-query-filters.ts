/* tslint:disable */
import { QueryFilters } from './query-filters';
import { UserAlertTypeEnum } from './user-alert-type-enum';

/**
 * Query filters for searching user alerts
 */
export interface UserAlertQueryFilters extends QueryFilters {

  /**
   * Either the ids or identification methods the alert user's brokers
   */
  brokers?: Array<string>;

  /**
   * The minimum / maximum alert date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  datePeriod?: Array<string>;

  /**
   * Either the ids or internal names of the alert user
   */
  groups?: Array<string>;

  /**
   * The types of user alerts to search
   */
  types?: Array<UserAlertTypeEnum>;

  /**
   * Either the id or identifier of the alert user
   */
  user?: string;
}
