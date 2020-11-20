/* tslint:disable */

/**
 * Error returned when some expected data was not found
 */
export interface NotFoundError {

  /**
   * The name of the entity being attempted, but not found
   */
  entityType?: string;

  /**
   * The identifier used to attempt to find the entity, such as id, internal name, principal, etc
   */
  key?: string;
}
