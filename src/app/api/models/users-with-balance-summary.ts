/* tslint:disable */
import { AmountSummary } from './amount-summary';

/**
 * Contains summarized information about balances per range, plus the total
 */
export interface UsersWithBalanceSummary {

  /**
   * Summary of high balances. Is only returned when a medium balance range is defined, either in the account type or in the query parameters.
   */
  high?: AmountSummary;

  /**
   * Summary of low balances. Is only returned when a medium balance range is defined, either in the account type or in the query parameters.
   */
  low?: AmountSummary;

  /**
   * Summary of medium balances. Is only returned when a medium balance range is defined, either in the account type or in the query parameters.
   */
  medium?: AmountSummary;

  /**
   * Summary of all balances.
   */
  total?: AmountSummary;
}
