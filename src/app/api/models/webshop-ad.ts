/* tslint:disable */
import { BaseAdDetailed } from './base-ad-detailed';

/**
 * An Ad with its status information.
 */
export interface WebshopAd extends BaseAdDetailed {

  /**
   * Indicates if the webshop ad allow enter a decimal value for the  quantity.
   */
  allowDecimalQuantity?: boolean;

  /**
   * The maximum quantity allowed to be added in the shopping cart.
   */
  maxAllowedInCart?: string;

  /**
   * The minimum quantity allowed to be added in the shopping cart.
   */
  minAllowedInCart?: string;

  /**
   * The stock disponibility. Only if `unlimitedStock` is false and the  'Stock type' was not marked as 'Not available' (through the web  interface).
   */
  stockQuantity?: string;

  /**
   * If true then it means there is always disponibility of the webshop ad.
   */
  unlimitedStock?: boolean;
}
