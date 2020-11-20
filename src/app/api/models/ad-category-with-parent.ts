/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';

/**
 * An advertisement category, together with its parent
 */
export interface AdCategoryWithParent extends InternalNamedEntity {
  parent?: AdCategoryWithParent;
}
