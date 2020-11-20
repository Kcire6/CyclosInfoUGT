/* tslint:disable */
import { DocumentRangeEnum } from './document-range-enum';
import { QueryFilters } from './query-filters';

/**
 * Filters used when searching documents
 */
export interface DocumentQueryFilters extends QueryFilters {

  /**
   * Either the ids or identification methods of individual document owners' brokers
   */
  brokers?: Array<string>;

  /**
   * The shared document categories
   */
  categories?: Array<string>;

  /**
   * Only used if the logged user can manage documents. When set, filters documents by their `enabled` status, either `true` or `false`.
   */
  enabled?: boolean;

  /**
   * Either the ids or internal names of individual document owners' group
   */
  groups?: Array<string>;

  /**
   * Used to filter documents containing that keywords in the the name or description (case insensitive)
   */
  keywords?: string;

  /**
   * The range for returned documents. When not specified, defaults to `shared`.
   */
  range?: DocumentRangeEnum;

  /**
   * Either the id or identifier of the document owner
   */
  user?: string;
}
