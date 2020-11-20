/* tslint:disable */
import { AddressNew } from './address-new';
import { BaseOrderAction } from './base-order-action';

/**
 * Contains data required to check-out a shopping cart
 */
export interface ShoppingCartCheckout extends BaseOrderAction {

  /**
   * The address used for delivery in this specific order. The fields `name`, `defaultAddress` and `hidden` are ignored.
   */
  deliveryAddress?: AddressNew;

  /**
   * The id of the selected delivery method (if any)
   */
  deliveryMethod?: string;

  /**
   * Either the internal name or id of the selected payment type.
   */
  paymentType?: string;
}
