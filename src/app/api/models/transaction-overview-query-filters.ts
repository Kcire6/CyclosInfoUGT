/* tslint:disable */
import { BaseTransactionQueryFilters } from './base-transaction-query-filters';

/**
 * Query filters for transactions regardless of an account owner.
 */
export interface TransactionOverviewQueryFilters extends BaseTransactionQueryFilters {

  /**
   * The currencies internal names or ids.
   */
  currencies?: Array<string>;

  /**
   * The source account types internal names or ids.
   */
  fromAccountTypes?: Array<string>;

  /**
   * When set to true will only return transactions (`payment`, `recurringPayment` or `scheduledPayment`) in pending authorization state that the logged user can authorize
   */
  pendingMyAuthorization?: boolean;

  /**
   * The source account types internal names or ids.
   */
  toAccountTypes?: Array<string>;
}
