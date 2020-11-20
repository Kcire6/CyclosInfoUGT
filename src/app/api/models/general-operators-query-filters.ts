/* tslint:disable */
import { BasicOperatorQueryFilters } from './basic-operator-query-filters';

/**
 * Definitions for general operators search filters
 */
export interface GeneralOperatorsQueryFilters extends BasicOperatorQueryFilters {

  /**
   * Either id or a principal (login name, e-mail, etc) of the user broker
   */
  broker?: string;

  /**
   * Either id or internal names of user groups / group sets
   */
  userGroups?: Array<string>;
}
