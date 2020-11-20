/* tslint:disable */
import { EntityReference } from './entity-reference';
import { InternalNamedEntity } from './internal-named-entity';

/**
 * Reference to a transfer type
 */
export interface TransferType extends InternalNamedEntity {

  /**
   * Reference to the source account type
   */
  from?: EntityReference;

  /**
   * Reference to the destination account type
   */
  to?: EntityReference;
}
