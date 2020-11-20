/* tslint:disable */

/**
 * Permissions over own tickets
 */
export interface TicketsPermissions {

  /**
   * Can approve tickets from others?
   */
  approve?: boolean;

  /**
   * Can cancel tickets?
   */
  cancel?: boolean;

  /**
   * Can create tickets?
   */
  create?: boolean;

  /**
   * Can view tickets?
   */
  view?: boolean;
}
