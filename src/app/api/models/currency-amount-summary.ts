/* tslint:disable */
import { AmountSummary } from './amount-summary';
import { Currency } from './currency';

/**
 * Contains summarized statistics over amounts of a currency
 */
export interface CurrencyAmountSummary extends AmountSummary {
  currency?: Currency;
}
