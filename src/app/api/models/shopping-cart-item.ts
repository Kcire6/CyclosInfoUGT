/* tslint:disable */
import { BaseOrderItem } from './base-order-item';

/**
 * An item in a shopping cart.
 */
export interface ShoppingCartItem extends BaseOrderItem {

  /**
   * The current product price at the moment of add it to the shopping cart.  Be carefull, this could not be the same price finally charged at  check-out (e.g because the promotional period has finished).  It could be used to show a warning message to the client indicating  the price has changed if it is different from the current price of the `product`.
   */
  priceWhenAdded?: string;

  /**
   * The promotional price (aka the current price). if it is present then  that is the current price that would be charged at check-out.  Otherwise would be the `price`.  Only present if it is defined and the promotional period has not  yet finished.
   */
  promotionalPrice?: string;
}
