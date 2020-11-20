/* tslint:disable */
import { BaseRecordDataForSearch } from './base-record-data-for-search';
import { RecordType } from './record-type';
import { SharedRecordsQueryFilters } from './shared-records-query-filters';

/**
 * Data for searching records with shared fields (multiple types)
 */
export interface SharedRecordsDataForSearch extends BaseRecordDataForSearch {

  /**
   * Default query filters for searching records
   */
  query?: SharedRecordsQueryFilters;

  /**
   * The possible record types.
   */
  recordTypes?: Array<RecordType>;
}
