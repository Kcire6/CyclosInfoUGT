/* tslint:disable */
import { Operation } from './operation';

/**
 * Describes an action that can be executed after running an operation.
 */
export interface RunOperationAction {

  /**
   * The custom operation that executes this action
   */
  action?: Operation;

  /**
   * The parameters that should be sent back when executing this action
   */
  parameters?: { [key: string]: string };
}
