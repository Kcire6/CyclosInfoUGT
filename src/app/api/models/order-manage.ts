/* tslint:disable */
import { OrderDeliveryMethod } from './order-delivery-method';
import { OrderItemManage } from './order-item-manage';
import { SimpleAddress } from './simple-address';

/**
 * Common fields for either creating or editing an order
 */
export interface OrderManage {
  deliveryAddress?: SimpleAddress;
  deliveryMethod?: OrderDeliveryMethod;

  /**
   * If `true` then the order is saved with status `draft` and is visible only for the seller. Otherwise, the order is saved with status `pendingBuyer` and sent to the buyer for acceptance.
   */
  draft?: boolean;

  /**
   * The order items
   */
  items?: Array<OrderItemManage>;

  /**
   * Remarks shown to the buyer if set
   */
  remarks?: string;
}
