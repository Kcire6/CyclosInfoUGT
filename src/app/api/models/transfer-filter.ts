/* tslint:disable */
import { EntityReference } from './entity-reference';
import { InternalNamedEntity } from './internal-named-entity';

/**
 * Reference to a transfer filter
 */
export interface TransferFilter extends InternalNamedEntity {

  /**
   * Reference to the account type
   */
  accountType?: EntityReference;
}
