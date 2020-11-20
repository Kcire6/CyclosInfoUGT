/* tslint:disable */
import { PerformBaseTransaction } from './perform-base-transaction';

/**
 * Base definitions for performing a transaction
 */
export interface PerformTransaction extends PerformBaseTransaction {

  /**
   * The payment destination (in case of perform payment) or payer (in case of receive payment). Either a user principal (id, login name,  etc) or the word `system` when the payment is to be performed to / from a system account. Note that a valid numeric value is always considered as id. For example, when using another identification method that can be numeric only, prefix the value with a single quote (like in Excel spreadsheets), for example, `'1234567890`.
   */
  subject?: string;
}
