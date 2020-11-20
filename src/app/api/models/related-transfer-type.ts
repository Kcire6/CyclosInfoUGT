/* tslint:disable */
import { EntityReference } from './entity-reference';
import { InternalNamedEntity } from './internal-named-entity';

/**
 * A transfer type related to an account point-of-view
 */
export interface RelatedTransferType extends InternalNamedEntity {

  /**
   * Reference to the related account type
   */
  related?: EntityReference;
}
