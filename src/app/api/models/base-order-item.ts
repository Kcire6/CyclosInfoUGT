/* tslint:disable */
import { Entity } from './entity';
import { WebshopAd } from './webshop-ad';

/**
 * An item containing a quantity.
 */
export interface BaseOrderItem extends Entity {

  /**
   * The regular price.
   */
  price?: string;
  product?: WebshopAd;

  /**
   * It represents how much of the product was ordered.  It could be a decimal number only if it's allowed by the  product (i.e the webshop ad).
   */
  quantity?: string;
}
