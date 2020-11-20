/* tslint:disable */

/**
 * Possible errors when interacting with a shopping cart.
 * Possible values are:
 * - `canNotBuyFromSeller`: The authenticated user is not visible by the webshop's seller
 * - `notEnoughStock`: There is not enough stock of the webshop ad to fulfill the requested quantity
 * - `unexpected`: An unexpected error has occurred. See the `exceptionType` and `exceptionMessage` fields for the internal information.
 */
export enum ShoppingCartErrorCode {
  CAN_NOT_BUY_FROM_SELLER = 'canNotBuyFromSeller',
  NOT_ENOUGH_STOCK = 'notEnoughStock',
  UNEXPECTED = 'unexpected'
}
