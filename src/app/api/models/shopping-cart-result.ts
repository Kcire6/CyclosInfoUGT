/* tslint:disable */
import { BaseShoppingCart } from './base-shopping-cart';
import { ShoppingCartItem } from './shopping-cart-item';

/**
 * Represents a group of webshop ads offered by the same seller and in the same currency.
 */
export interface ShoppingCartResult extends BaseShoppingCart {

  /**
   * The webshop ads added to the cart.
   */
  items?: Array<ShoppingCartItem>;
}
