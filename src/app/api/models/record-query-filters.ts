/* tslint:disable */
import { FullTextQueryFilters } from './full-text-query-filters';

/**
 * Query filters for records
 */
export interface RecordQueryFilters extends FullTextQueryFilters {

  /**
   * Either the id or identifier of the user that created the record
   */
  createdBy?: string;

  /**
   * The minimum / maximum record creation date
   */
  creationPeriod?: Array<string>;

  /**
   * Record custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, `customFields=field1:value1,field2:value2`. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields=field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, `customFields=tradeType:offer|search,extraDate:2000-01-01|2001-12-31` would match results whose custom field with internal name `tradeType` is either `offer` or `search`, and whose `extraDate` is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like `customFields=extraDate:|2001-12-31`.
   * A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the  corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: `customFields=dynamic:a|b|c`. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: `customFields=dynamic:'business`.
   */
  customFields?: Array<string>;
}
