/* tslint:disable */
import { QueryFilters } from './query-filters';
import { ReferenceLevelEnum } from './reference-level-enum';

/**
 * common query filters for references
 */
export interface BaseReferenceQueryFilters extends QueryFilters {

  /**
   * The levels to filter
   */
  levels?: Array<ReferenceLevelEnum>;

  /**
   * The minimum / maximum reference date
   */
  period?: Array<string>;
}
