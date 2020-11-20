/* tslint:disable */
import { DocumentQueryFilters } from './document-query-filters';
import { EntityReference } from './entity-reference';
import { User } from './user';

/**
 * Configuration data for searching documents
 */
export interface DocumentDataForSearch {

  /**
   * Indicates whether the logged user can manage individual documents of managed users
   */
  canManageIndividual?: boolean;

  /**
   * Visible document categories
   */
  categories?: Array<EntityReference>;

  /**
   * Either internal names of ids of categories the logged user can manage
   */
  manageCategories?: Array<string>;
  query?: DocumentQueryFilters;

  /**
   * The document's owner. Only returned if searching documents of a specfific user.
   */
  user?: User;
}
