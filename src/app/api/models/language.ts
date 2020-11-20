/* tslint:disable */
import { VersionedEntity } from './versioned-entity';

/**
 * Reference to a language in Cyclos
 */
export interface Language extends VersionedEntity {

  /**
   * The ISO 639-1 language code
   */
  code?: string;
}
