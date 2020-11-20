/* tslint:disable */
import { Image } from './image';
import { InternalNamedEntity } from './internal-named-entity';

/**
 * An advertisement category, together with its children
 */
export interface AdCategoryWithChildren extends InternalNamedEntity {

  /**
   * The child categories
   */
  children?: Array<AdCategoryWithChildren>;
  image?: Image;
}
