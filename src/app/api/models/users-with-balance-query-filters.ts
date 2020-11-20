/* tslint:disable */
import { BasicUserQueryFilters } from './basic-user-query-filters';
import { UsersWithBalanceOrderByEnum } from './users-with-balance-order-by-enum';

/**
 * Parameters for searching users with their balances
 */
export interface UsersWithBalanceQueryFilters extends BasicUserQueryFilters {

  /**
   * The account type
   */
  accountType: string;

  /**
   * The minimum and / or maximum balance for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  balanceRange?: Array<number>;

  /**
   * An array with 2 elements, describing the lower and upper medium balance bounds. Both of them need to be set as 2 element in the array, or it won't be considered.
   */
  mediumBalanceRange?: Array<number>;

  /**
   * The minimum / maximum negative-since date for users to be returned. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  negativeSincePeriod?: Array<string>;
  orderBy?: UsersWithBalanceOrderByEnum;
}
