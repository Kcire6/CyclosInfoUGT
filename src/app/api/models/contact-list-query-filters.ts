/* tslint:disable */
import { ContactOrderByEnum } from './contact-order-by-enum';
import { QueryFilters } from './query-filters';

/**
 * Search filters for an user's contact list
 */
export interface ContactListQueryFilters extends QueryFilters {

  /**
   * Concat custom field values used as filters. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by : (colon).  For example, `customFields=field1:value1,field2:value2`. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, customFields=field1:valueA|valueB. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, `customFields=tradeType:offer|search,extraDate:2000-01-01|2001-12-31` would match results whose custom field with internal name `tradeType` is either `offer` or `search`, and whose `extraDate` is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like `customValues=extraDate:|2001-12-31`.
   */
  customFields?: Array<string>;

  /**
   * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
   */
  keywords?: string;
  orderBy?: ContactOrderByEnum;
}
