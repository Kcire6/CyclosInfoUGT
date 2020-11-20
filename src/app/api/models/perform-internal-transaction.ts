/* tslint:disable */
import { PerformTransaction } from './perform-transaction';

/**
 * Base definitions to performing a transaction to an internal account (any except `externalPayment`, or `chargeback` which is performed distinctly).
 */
export interface PerformInternalTransaction extends PerformTransaction {

  /**
   * If the payment type allows setting a custom name for the origin account, is its name. If not allowed, is ignored. For example, integration with other systems could use 'Bank account [IBAN]'.
   */
  fromName?: string;

  /**
   * If the payment type allows setting a custom name for the destination account, is its name. If not allowed, is ignored. For example, integration with other systems could use 'Bank account [IBAN]'.
   */
  toName?: string;
}
