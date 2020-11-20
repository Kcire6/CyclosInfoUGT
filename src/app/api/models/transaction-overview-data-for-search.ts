/* tslint:disable */
import { BaseTransactionDataForSearch } from './base-transaction-data-for-search';
import { TransactionOverviewQueryFilters } from './transaction-overview-query-filters';
import { TransferType } from './transfer-type';

/**
 * Contains data used to search transactions regardless of an account owner
 */
export interface TransactionOverviewDataForSearch extends BaseTransactionDataForSearch {

  /**
   * Payment types the authenticated administrator can authorize. Only returned when logged-in as administrator and the request had the `pendingMyAuthorization` flag set to true.
   */
  authorizablePaymentTypes?: Array<TransferType>;

  /**
   * Default query filters for the transactions search
   */
  query?: TransactionOverviewQueryFilters;
}
