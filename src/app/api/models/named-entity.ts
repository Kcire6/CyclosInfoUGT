/* tslint:disable */
import { Entity } from './entity';

/**
 * Basic definition of a persistent entity which has a name
 */
export interface NamedEntity extends Entity {

  /**
   * The entity name
   */
  name?: string;
}
