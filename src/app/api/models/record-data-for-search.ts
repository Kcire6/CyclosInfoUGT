/* tslint:disable */
import { BaseRecordDataForSearch } from './base-record-data-for-search';
import { RecordQueryFilters } from './record-query-filters';
import { User } from './user';

/**
 * Data for searching records of a specific owner and type
 */
export interface RecordDataForSearch extends BaseRecordDataForSearch {

  /**
   * Default query filters for searching records
   */
  query?: RecordQueryFilters;

  /**
   * The records owner. Only returned if is not system.
   */
  user?: User;
}
