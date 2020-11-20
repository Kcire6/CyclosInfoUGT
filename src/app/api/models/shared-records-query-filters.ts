/* tslint:disable */
import { GeneralRecordsQueryFilters } from './general-records-query-filters';

/**
 * Query filters for searching distinct record types which shared common fields
 */
export interface SharedRecordsQueryFilters extends GeneralRecordsQueryFilters {

  /**
   * Either the ids or identification methods of record types
   */
  types?: Array<string>;
}
