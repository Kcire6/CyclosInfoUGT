/* tslint:disable */
import { AccountStatus } from './account-status';
import { AmountSummary } from './amount-summary';

/**
 * Contains instant status information, as inherited from `AccountStatus`,  plus status that depend on an account history query parameters
 */
export interface AccountHistoryStatus extends AccountStatus {

  /**
   * The raw balance at the beginning of the informed period
   */
  balanceAtBegin?: string;

  /**
   * The raw balance at the end of the informed period
   */
  balanceAtEnd?: string;

  /**
   * The reference begin date
   */
  beginDate?: string;

  /**
   * The reference end date
   */
  endDate?: string;

  /**
   * The summary of incoming transfers
   */
  incoming?: AmountSummary;

  /**
   * The raw difference between incoming and outgoing transfers in the informed period
   */
  netInflow?: string;

  /**
   * The summary of outgoing transfers
   */
  outgoing?: AmountSummary;
}
