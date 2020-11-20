/* tslint:disable */
import { DeliveryMethodChargeTypeEnum } from './delivery-method-charge-type-enum';
import { TimeInterval } from './time-interval';

/**
 * Common fields for either creating or editing a delivery method
 */
export interface DeliveryMethodManage {

  /**
   * The delivery price. Only makes sense if `chargeType` is `fixed`.
   */
  chargeAmount?: string;

  /**
   * Either id or internal name of the price currency.
   */
  chargeCurrency?: string;
  chargeType?: DeliveryMethodChargeTypeEnum;

  /**
   * Use `minDeliveryTime` and `maxDeliveryTime` instead.
   *
   *
   * The maximum time interval expected for the products to be delivered.
   *
   * @deprecated
   */
  deliveryTime?: TimeInterval;

  /**
   * A description on how this delivery method works.
   */
  description?: string;

  /**
   * Whether this delivery method is enabled for new sales.
   */
  enabled?: boolean;

  /**
   * The maximum time interval expected for the products to be delivered.
   */
  maxDeliveryTime?: TimeInterval;

  /**
   * The minimum time interval expected for the products to be delivered.
   */
  minDeliveryTime?: TimeInterval;

  /**
   * The visible name for this delivery method.
   */
  name?: string;
}
