/* tslint:disable */
import { BaseOrder } from './base-order';
import { Currency } from './currency';
import { Image } from './image';
import { OrderStatusEnum } from './order-status-enum';

/**
 * Data of an order as returned on list.
 */
export interface OrderResult extends BaseOrder {

  /**
   * The creation date corresponding to the date when the first item of  this order was added to the shopping cart.
   */
  creationDate?: string;

  /**
   * The currency of the order.
   */
  currency?: Currency;

  /**
   * This represents the first image of the first item in the order (if any).
   */
  image?: Image;

  /**
   * The generated order number according to the webshop settings.
   */
  number?: string;
  status?: OrderStatusEnum;

  /**
   * The total price of the order, i.e the sum of the total price of all  of its `items` and the delivery method (if any).
   */
  totalPrice?: string;
}
