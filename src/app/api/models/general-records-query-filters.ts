/* tslint:disable */
import { RecordQueryFilters } from './record-query-filters';

/**
 * Query filters for searching records of a type, regardless the user
 */
export interface GeneralRecordsQueryFilters extends RecordQueryFilters {

  /**
   * Either the ids or identification methods of record owners' brokers
   */
  brokers?: Array<string>;

  /**
   * Either the ids or internal names of record owners' groups
   */
  groups?: Array<string>;

  /**
   * Either the id or identifier of the record owner
   */
  user?: string;
}
