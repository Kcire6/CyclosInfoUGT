/* tslint:disable */
import { ShoppingCartItem } from './shopping-cart-item';
import { ShoppingCartItemAvailabilityEnum } from './shopping-cart-item-availability-enum';
import { ShoppingCartItemQuantityAdjustmentEnum } from './shopping-cart-item-quantity-adjustment-enum';

/**
 * Detailed information of a shopping cart item.
 */
export interface ShoppingCartItemDetailed extends ShoppingCartItem {
  availability?: ShoppingCartItemAvailabilityEnum;
  quantityAdjustment?: ShoppingCartItemQuantityAdjustmentEnum;

  /**
   * The total price for this item, i.e the curent price of the product multiplied by its corresponding quantity.
   */
  totalPrice?: string;
}
