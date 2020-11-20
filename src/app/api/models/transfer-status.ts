/* tslint:disable */
import { EntityReference } from './entity-reference';
import { InternalNamedEntity } from './internal-named-entity';

/**
 * Reference to a status and its flow
 */
export interface TransferStatus extends InternalNamedEntity {

  /**
   * The status flow
   */
  flow?: EntityReference;
}
