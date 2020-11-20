/* tslint:disable */
import { Currency } from './currency';
import { DeliveryMethod } from './delivery-method';

/**
 * Data used to to set a delivery method.
 */
export interface OrderDataForSetDeliveryMethod {
  currency?: Currency;

  /**
   * List with all delivery methods shared by all products contained in the order.
   */
  deliveryMethods?: Array<DeliveryMethod>;
}
