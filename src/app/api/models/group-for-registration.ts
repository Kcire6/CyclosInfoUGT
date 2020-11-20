/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';

/**
 * Contains data for a possible group for user registration
 */
export interface GroupForRegistration extends InternalNamedEntity {

  /**
   * The description set on the group to be displayed to the user
   */
  description?: string;
}
