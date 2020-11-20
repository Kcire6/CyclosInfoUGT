/* tslint:disable */
import { EntityReference } from './entity-reference';
import { RoleEnum } from './role-enum';
import { SessionQueryFilters } from './session-query-filters';

/**
 * Data for searching user sessions
 */
export interface SessionDataForSearch {

  /**
   * The channel internal names the authenticated user can use to filter sessions.
   */
  channels?: Array<EntityReference>;

  /**
   * Default query filters for searching sessions
   */
  query?: SessionQueryFilters;

  /**
   * The roles the authenticated user can use to filter sessions.
   */
  roles?: Array<RoleEnum>;
}
