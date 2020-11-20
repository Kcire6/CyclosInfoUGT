/* tslint:disable */
import { TimeInterval } from './time-interval';

/**
 * The order delivery method
 */
export interface OrderDeliveryMethod {

  /**
   * The maximum time interval expected for the products to be delivered.
   */
  maxTime?: TimeInterval;

  /**
   * The minimum time interval expected for the products to be delivered.
   */
  minTime?: TimeInterval;

  /**
   * The name of the delivery method
   */
  name?: string;

  /**
   * The amount to be charged for the delivery method
   */
  price?: string;
}
