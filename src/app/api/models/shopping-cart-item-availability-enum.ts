/* tslint:disable */

/**
 * The possible status of a webshop advertisement in relation to its availability
 * Possible values are:
 * - `available`: The webshop advertisement is available and can be purchased
 * - `outOfStock`: The webshop advertisement is now out of stock
 * - `unavailable`: The webshop advertisement has been made unavailable and cannot be purchased anymore
 */
export enum ShoppingCartItemAvailabilityEnum {
  AVAILABLE = 'available',
  OUT_OF_STOCK = 'outOfStock',
  UNAVAILABLE = 'unavailable'
}
