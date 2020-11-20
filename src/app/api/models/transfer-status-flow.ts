/* tslint:disable */
import { EntityReference } from './entity-reference';
import { InternalNamedEntity } from './internal-named-entity';

/**
 * A transfer status flow determines a status a transfer may have. For each flow the transfer participates (can be multiple) the transfer will have a status. The transition between states is also defined on the flow.
 */
export interface TransferStatusFlow extends InternalNamedEntity {

  /**
   * All statuses this flow has
   */
  statuses?: Array<EntityReference>;
}
