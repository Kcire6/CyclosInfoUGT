/* tslint:disable */
import { Error } from './error';
import { ShoppingCartErrorCode } from './shopping-cart-error-code';
import { User } from './user';
import { WebshopAd } from './webshop-ad';

/**
 * Error when interacting with the shopping cart.
 */
export interface ShoppingCartError extends Error {

  /**
   * The webshop ad for which there is not enough stock.  Only if `code` is `notEnoughStock`
   */
  ad?: WebshopAd;
  code?: ShoppingCartErrorCode;

  /**
   * The seller whose webshop ad can not be bought. Only if `code` is `canNotBuyFromSeller`
   */
  seller?: User;
}
