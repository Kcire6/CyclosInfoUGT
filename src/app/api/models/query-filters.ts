/* tslint:disable */

/**
 * Base definitions for objects used as filters for queries
 */
export interface QueryFilters {

  /**
   * The page number (zero-based) of the search. The default value is zero.
   */
  page?: number;

  /**
   * The maximum number of records that will be returned on the search. The default value is 40. The maximum number of returned results is configured in Cyclos, and even if more than that is requested, it will be limited by that setting.
   */
  pageSize?: number;

  /**
   * When set to true the result will not include the total record count, only the information on whether there are more records. Depending on the server-side configuration, this can be always true. Otherwise, if the server allows total count, and the client doesn't need it, setting this to true can increase performance a bit.
   */
  skipTotalCount?: boolean;
}
