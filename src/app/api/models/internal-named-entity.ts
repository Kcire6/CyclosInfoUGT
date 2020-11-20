/* tslint:disable */
import { NamedEntity } from './named-entity';

/**
 * Basic definition of a persistent entity which has both a name and an internal name
 */
export interface InternalNamedEntity extends NamedEntity {

  /**
   * The entity internal name, which can be seen as an extra identifier
   */
  internalName?: string;
}
