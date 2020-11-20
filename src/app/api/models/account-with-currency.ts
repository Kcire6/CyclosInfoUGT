/* tslint:disable */
import { Account } from './account';
import { Currency } from './currency';

/**
 * Contains account data, plus currency reference
 */
export interface AccountWithCurrency extends Account {
  currency?: Currency;
}
