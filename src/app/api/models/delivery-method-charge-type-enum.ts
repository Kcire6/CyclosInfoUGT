/* tslint:disable */

/**
 * How the price is determined on this delivery method
 * Possible values are:
 * - `fixed`: The delivery method price will be fixed.
 * - `negotiated`: The delivery method price will be negotiated between the seller and the buyer.
 */
export enum DeliveryMethodChargeTypeEnum {
  FIXED = 'fixed',
  NEGOTIATED = 'negotiated'
}
