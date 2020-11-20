/* tslint:disable */
import { BaseOrderAction } from './base-order-action';
import { TimeInterval } from './time-interval';

/**
 * Delivery method information
 */
export interface SetDeliveryMethod extends BaseOrderAction {

  /**
   * The delivery method charge amount.
   */
  chargeAmount?: string;

  /**
   * The delivery method maximum time interval
   */
  maxTime?: TimeInterval;

  /**
   * The delivery method minimum time interval
   */
  minTime?: TimeInterval;

  /**
   * The delivery method name.
   */
  name?: string;

  /**
   * Use `minTime` and `maxTime` instead.
   *
   * @deprecated
   */
  time?: TimeInterval;
}
