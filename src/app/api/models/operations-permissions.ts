/* tslint:disable */
import { OperationPermissions } from './operation-permissions';

/**
 * Permissions over own or system operations
 */
export interface OperationsPermissions {

  /**
   * Custom operations the authenticated has access, with `scope` = `system`. Only returned for administrators.
   */
  system?: Array<OperationPermissions>;

  /**
   * Permissions over custom operations applied to the authenticated user, with `scope` = `user`.
   */
  user?: Array<OperationPermissions>;
}
