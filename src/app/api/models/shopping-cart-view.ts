/* tslint:disable */
import { BaseShoppingCart } from './base-shopping-cart';
import { ShoppingCartItemDetailed } from './shopping-cart-item-detailed';

/**
 * Represents a group of webshop ads offered by the same seller and in the same currency.
 */
export interface ShoppingCartView extends BaseShoppingCart {

  /**
   * Detailed information of the items present in the cart.
   */
  items?: Array<ShoppingCartItemDetailed>;

  /**
   * The total price of this cart, i.e the sum of the total price of all  of its `items`.
   */
  totalPrice?: string;
}
