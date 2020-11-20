/* tslint:disable */
import { BaseInstallmentResult } from './base-installment-result';
import { TransactionResult } from './transaction-result';

/**
 * Represents an installment, as viewed from the point-of-view of an account owner. This means that credits will have a positive amount, while debits will be negative.
 */
export interface InstallmentResult extends BaseInstallmentResult {

  /**
   * The transaction that originated this installment
   */
  transaction?: TransactionResult;
}
