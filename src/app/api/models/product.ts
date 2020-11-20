/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';
import { ProductKind } from './product-kind';

/**
 * Reference to a product
 */
export interface Product extends InternalNamedEntity {
  kind?: ProductKind;
}
