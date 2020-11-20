/* tslint:disable */

/**
 * The possible adjustments to a quantity-limited product added to shopping cart
 * Possible values are:
 * - `max`: The quantity was reduced to honor the maximum allowed quantity
 * - `min`: The quantity was raised to honor the minimum allowed quantity
 * - `stock`: The quantity was reduced to the maximum available stock quantity
 */
export enum ShoppingCartItemQuantityAdjustmentEnum {
  MAX = 'max',
  MIN = 'min',
  STOCK = 'stock'
}
