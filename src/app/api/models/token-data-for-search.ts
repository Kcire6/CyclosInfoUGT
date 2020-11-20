/* tslint:disable */
import { ExportFormat } from './export-format';
import { Group } from './group';
import { TokenPermissions } from './token-permissions';
import { TokenQueryFilters } from './token-query-filters';

/**
 * Configuration data for a general tokens search of a given type
 */
export interface TokenDataForSearch extends TokenPermissions {

  /**
   * The formats which the data can be exported
   */
  exportFormats?: Array<ExportFormat>;

  /**
   * The groups the authenticated user can use to filter tokens. Admins can always filter by groups, while brokers depend on a permission, which can be to only view group sets, only groups or none.
   */
  groups?: Array<Group>;

  /**
   * Default query filters to search tokens
   */
  query?: TokenQueryFilters;
}
