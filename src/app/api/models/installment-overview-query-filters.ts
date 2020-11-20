/* tslint:disable */
import { BaseInstallmentQueryFilters } from './base-installment-query-filters';

/**
 * Query filters for installments regardless of an account owner.
 */
export interface InstallmentOverviewQueryFilters extends BaseInstallmentQueryFilters {

  /**
   * The currencies internal names or ids.
   */
  currencies?: Array<string>;

  /**
   * The source account types internal names or ids.
   */
  fromAccountTypes?: Array<string>;

  /**
   * The source account types internal names or ids.
   */
  toAccountTypes?: Array<string>;
}
