/* tslint:disable */
import { ExportFormat } from './export-format';
import { OrderDeliveryMethod } from './order-delivery-method';
import { OrderItem } from './order-item';
import { OrderLog } from './order-log';
import { OrderResult } from './order-result';
import { SimpleAddress } from './simple-address';
import { TimeInterval } from './time-interval';
import { TransferType } from './transfer-type';
import { User } from './user';

/**
 * Detailed information when viewing an order
 */
export interface OrderView extends OrderResult {

  /**
   * The buyer of the order.
   */
  buyer?: User;

  /**
   * An order can be accepted only for the following statuses:
   *
   * - `draft`: only if the authenticated user is the seller meaning the seller can submit the sale to the buyer.
   * - `pendingBuyer`: only if the authenticated user is the buyer
   * - `pendingSeller`: only if the authenticated user is the seller and the order has a delivery method already set
   */
  canAccept?: boolean;

  /**
   * An order can be rejected only for the following statuses:
   *
   * - `pendingBuyer`: only if the authenticated user is the buyer or the seller
   * - `pendingSeller`: only if the authenticated user is the seller
   */
  canReject?: boolean;

  /**
   * Delivery information can be set only for the following statuses:
   *
   * - `draft`: only if the authenticated user is the seller
   * - `pendingSeller`: only if the authenticated user is the seller and a delivery method was not already set
   */
  canSetDeliveryInformation?: boolean;
  deliveryAddress?: SimpleAddress;
  deliveryMethod?: OrderDeliveryMethod;

  /**
   * Use `deliveryMethod.name` instead.
   *
   * @deprecated
   */
  deliveryMethodName?: string;

  /**
   * Use `deliveryMethod.price` instead.
   *
   * @deprecated
   */
  deliveryPrice?: string;

  /**
   * Use `deliveryMethod.minTime` and `deliveryMethod.maxTime` instead.
   *
   * @deprecated
   */
  deliveryTime?: TimeInterval;

  /**
   * The formats which the ordercan be exported
   */
  exportFormats?: Array<ExportFormat>;

  /**
   * Contains the history entries for all order status changes
   */
  history?: Array<OrderLog>;

  /**
   * The order items
   */
  items?: Array<OrderItem>;

  /**
   * Use `deliveryMethod.maxTime` instead.
   *
   * @deprecated
   */
  maxDeliveryTime?: TimeInterval;

  /**
   * Use `deliveryMethod.minTime` instead.
   *
   * @deprecated
   */
  minDeliveryTime?: TimeInterval;
  paymentType?: TransferType;

  /**
   * The current order remarks (i.e those for check-out, accept or reject).
   */
  remarks?: string;

  /**
   * Is it a sale (initiated by the seller)?
   */
  sale?: boolean;

  /**
   * The seller of the order.
   */
  seller?: User;
}
