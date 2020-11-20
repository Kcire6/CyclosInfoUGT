/* tslint:disable */
import { Currency } from './currency';
import { TransferType } from './transfer-type';

/**
 * A transfer type with currency
 */
export interface TransferTypeWithCurrency extends TransferType {
  currency?: Currency;
}
