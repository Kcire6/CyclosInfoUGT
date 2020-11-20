/* tslint:disable */
import { BaseInstallmentQueryFilters } from './base-installment-query-filters';
import { TransferDirectionEnum } from './transfer-direction-enum';

/**
 * Query filters for transactions related to an account owner.
 */
export interface InstallmentQueryFilters extends BaseInstallmentQueryFilters {

  /**
   * The account types
   */
  accountTypes?: Array<string>;
  direction?: TransferDirectionEnum;
}
