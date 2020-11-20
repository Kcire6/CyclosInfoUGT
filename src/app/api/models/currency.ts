/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';

/**
 * Reference to a currency
 */
export interface Currency extends InternalNamedEntity {

  /**
   * The number of decimal digits used by this currency
   */
  decimalDigits?: number;

  /**
   * The currency prefix when formatting numbers
   */
  prefix?: string;

  /**
   * The currency suffix when formatting numbers
   */
  suffix?: string;

  /**
   * The currency symbol
   */
  symbol?: string;

  /**
   * If transaction number is enabled for this currency, contains the pattern which is expected, in case of rendering a field for users to type in a transaction number
   */
  transactionNumberPattern?: string;
}
