/* tslint:disable */
import { BaseOrderItem } from './base-order-item';

/**
 * Data for an order item.
 */
export interface OrderItem extends BaseOrderItem {

  /**
   * The total price for this item, i.e the charged price of the product  multiplied by its corresponding quantity.
   */
  totalPrice?: string;
}
