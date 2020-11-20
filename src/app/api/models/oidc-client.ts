/* tslint:disable */
import { Image } from './image';
import { InternalNamedEntity } from './internal-named-entity';

/**
 * Represents a client
 */
export interface OidcClient extends InternalNamedEntity {
  image?: Image;
}
