/* tslint:disable */
import { BaseInstallmentResult } from './base-installment-result';
import { TransactionOverviewResult } from './transaction-overview-result';

/**
 * Represents an installment.
 */
export interface InstallmentOverviewResult extends BaseInstallmentResult {

  /**
   * The transaction that originated this installment
   */
  transaction?: TransactionOverviewResult;
}
