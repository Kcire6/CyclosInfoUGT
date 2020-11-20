/* tslint:disable */

/**
 * Possible errors when checking out a shopping cart.
 * Possible values are:
 * - `insufficientBalance`: The origin account of the selected payment type used to make the amount reservation does not have enough balance.
 * - `products`: There was an error related to the products contained in he shopping cart.
 * - `unexpected`: An unexpected error has occurred. See the `exceptionType` and `exceptionMessage` fields for the internal information.
 */
export enum ShoppingCartCheckoutErrorCode {
  INSUFFICIENT_BALANCE = 'insufficientBalance',
  PRODUCTS = 'products',
  UNEXPECTED = 'unexpected'
}
