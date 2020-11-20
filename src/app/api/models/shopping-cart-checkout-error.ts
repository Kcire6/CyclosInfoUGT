/* tslint:disable */
import { Error } from './error';
import { ShoppingCartCheckoutErrorCode } from './shopping-cart-checkout-error-code';
import { ShoppingCartError } from './shopping-cart-error';

/**
 * Error when check-out a shopping cart.
 */
export interface ShoppingCartCheckoutError extends Error {
  code?: ShoppingCartCheckoutErrorCode;

  /**
   * The `ShoppingCartError` generated when the products in the cart were being validated.  Only if `code` is `products`.
   */
  shoppingCartError?: ShoppingCartError;
}
