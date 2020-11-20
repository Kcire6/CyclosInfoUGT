/* tslint:disable */
import { Entity } from './entity';
import { EntityReference } from './entity-reference';
import { User } from './user';

/**
 * Details of a change that took place in a transfer status.
 */
export interface TransferStatusLog extends Entity {

  /**
   * The user that performed the change
   */
  by?: User;

  /**
   * Comments provided by the user which performed the change
   */
  comments?: string;

  /**
   * The date / time the action was performed
   */
  date?: string;

  /**
   * The new status
   */
  status?: EntityReference;
}
