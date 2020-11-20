/* tslint:disable */
import { Operation } from './operation';

/**
 * Permissions over a specific custom operation
 */
export interface OperationPermissions {
  operation?: Operation;

  /**
   * Can run this operation?
   */
  run?: boolean;
}
