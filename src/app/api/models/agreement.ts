/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';

/**
 * An agreement the user must accept in order to use the system
 */
export interface Agreement extends InternalNamedEntity {

  /**
   * Indicates whether accepting this agreement is required for using the system.
   */
  required?: boolean;
}
