/* tslint:disable */
import { Currency } from './currency';
import { DeliveryMethodChargeTypeEnum } from './delivery-method-charge-type-enum';
import { NamedEntity } from './named-entity';
import { TimeInterval } from './time-interval';

/**
 * Reference to a webshop delivery method
 */
export interface DeliveryMethod extends NamedEntity {

  /**
   * The amount to be charged. Only makes sense if `chargeType` is `fixed`.
   */
  chargeAmount?: string;

  /**
   * The delivery price currency. Only makes sense if `chargeType` is `fixed`.
   */
  chargeCurrency?: Currency;
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
}
