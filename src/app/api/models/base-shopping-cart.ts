/* tslint:disable */
import { BaseOrder } from './base-order';
import { Currency } from './currency';
import { User } from './user';

/**
 * Contains basic data shared by other shopping cart related models.
 */
export interface BaseShoppingCart extends BaseOrder {
  currency?: Currency;

  /**
   * Flag in `true` if there isn't any account in that currency with enough available balance to be able to fulfill the order from the shopping cart.
   */
  insufficientBalance?: boolean;
  seller?: User;
}
