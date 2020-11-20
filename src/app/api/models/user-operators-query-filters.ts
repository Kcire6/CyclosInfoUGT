/* tslint:disable */
import { BasicOperatorQueryFilters } from './basic-operator-query-filters';

/**
 * Definitions for a user's operators search filters
 */
export interface UserOperatorsQueryFilters extends BasicOperatorQueryFilters {

  /**
   * When set to `true`, instead of returning users with corresponding profile fields set on list, will return them with `display` and `shortDisplay`.
   */
  ignoreProfileFieldsInList?: boolean;

  /**
   * An array of operator group ids
   */
  operatorGroups?: Array<string>;
}
