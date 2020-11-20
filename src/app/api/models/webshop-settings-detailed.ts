/* tslint:disable */
import { WebshopSettings } from './webshop-settings';

/**
 * Settings for a user's webshop
 */
export interface WebshopSettingsDetailed extends WebshopSettings {

  /**
   * Whether orders will have a custom format for assigned numbers. When set, the number will be generated from a given prefix, inner length and suffix. When false, a numeric string will be used.
   */
  customOrderNumberFormat?: boolean;

  /**
   * The size of the numerical part of the order number.
   */
  orderNumberInnerLength?: number;

  /**
   * The order number prefix. You can generate a date part by using a [Java date pattern](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html) between sharp (#) characters.
   */
  orderNumberPrefix?: string;

  /**
   * The order number suffix. You can generate a date part by using a [Java date pattern](https://docs.oracle.com/javase/8/docs/api/java/text/SimpleDateFormat.html) between sharp (#) characters.
   */
  orderNumberSuffix?: string;
}
