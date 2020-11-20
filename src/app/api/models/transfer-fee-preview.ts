/* tslint:disable */
import { Currency } from './currency';
import { EntityReference } from './entity-reference';

/**
 * Preview of a transfer fee in case a payment is confirmed
 */
export interface TransferFeePreview {

  /**
   * The transfer fee amout
   */
  amount?: string;

  /**
   * The transfer fee currency
   */
  currency?: Currency;

  /**
   * The transfer fee
   */
  fee?: EntityReference;
}
