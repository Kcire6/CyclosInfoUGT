/* tslint:disable */
import { BaseTransactionOrInstallmentQueryFilters } from './base-transaction-or-installment-query-filters';
import { InstallmentStatusEnum } from './installment-status-enum';

/**
 * Base query filters for installments
 */
export interface BaseInstallmentQueryFilters extends BaseTransactionOrInstallmentQueryFilters {

  /**
   * Possible statuses for installments.
   */
  statuses?: Array<InstallmentStatusEnum>;
}
