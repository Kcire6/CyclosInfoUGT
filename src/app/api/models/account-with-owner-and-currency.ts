/* tslint:disable */
import { AccountWithOwner } from './account-with-owner';
import { Currency } from './currency';

/**
 * Contains account data, plus owner and currency reference
 */
export interface AccountWithOwnerAndCurrency extends AccountWithOwner {
  currency?: Currency;
}
