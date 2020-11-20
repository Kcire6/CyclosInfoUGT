/* tslint:disable */
import { AccountType } from './account-type';
import { BaseTransDataForSearch } from './base-trans-data-for-search';
import { TransactionKind } from './transaction-kind';

/**
 * Contains data used to search transactions, either as an owner point of view or as overview.
 */
export interface BaseTransactionDataForSearch extends BaseTransDataForSearch {

  /**
   * Visible account types from the given owner
   */
  accountTypes?: Array<AccountType>;

  /**
   * Can the authenticated user view authorized transactions of this owner?
   */
  canViewAuthorized?: boolean;

  /**
   * Contains the transaction kinds the authenticated user can view over this owner.
   */
  visibleKinds?: Array<TransactionKind>;
}
