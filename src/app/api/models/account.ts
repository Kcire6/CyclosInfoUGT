/* tslint:disable */
import { Entity } from './entity';
import { EntityReference } from './entity-reference';

/**
 * Contains basic data for an account
 */
export interface Account extends Entity {

  /**
   * The account number
   */
  number?: string;

  /**
   * Reference to the account type
   */
  type?: EntityReference;
}
