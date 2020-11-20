/* tslint:disable */
import { AccountType } from './account-type';
import { BaseTransferDataForSearch } from './base-transfer-data-for-search';
import { Currency } from './currency';
import { TransferQueryFilters } from './transfer-query-filters';

/**
 * Contains data for searching transfers over multiple accounts
 */
export interface TransferDataForSearch extends BaseTransferDataForSearch {

  /**
   * References for the account types
   */
  accountTypes?: Array<AccountType>;

  /**
   * References for the available currencies
   */
  currencies?: Array<Currency>;

  /**
   * Default query filters for the general transfers search
   */
  query?: TransferQueryFilters;
}
