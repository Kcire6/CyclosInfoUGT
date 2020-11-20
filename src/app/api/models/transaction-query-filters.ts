/* tslint:disable */
import { BaseTransactionQueryFilters } from './base-transaction-query-filters';
import { TransferDirectionEnum } from './transfer-direction-enum';

/**
 * Query filters for transactions related to an account owner.
 */
export interface TransactionQueryFilters extends BaseTransactionQueryFilters {

  /**
   * The account types
   */
  accountTypes?: Array<string>;
  direction?: TransferDirectionEnum;
}
