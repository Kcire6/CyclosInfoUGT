/* tslint:disable */
import { AccountTypeWithDefaultMediumBalanceRange } from './account-type-with-default-medium-balance-range';
import { BaseUserDataForSearch } from './base-user-data-for-search';
import { UsersWithBalanceQueryFilters } from './users-with-balance-query-filters';

/**
 * Data used for a user search together with account balances
 */
export interface DataForUserBalancesSearch extends BaseUserDataForSearch {

  /**
   * The available account types for the search
   */
  accountTypes?: Array<AccountTypeWithDefaultMediumBalanceRange>;

  /**
   * Default query parameters
   */
  query?: UsersWithBalanceQueryFilters;
}
