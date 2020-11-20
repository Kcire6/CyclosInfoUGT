/* tslint:disable */
import { QueryFilters } from './query-filters';
import { TokenStatusEnum } from './token-status-enum';

/**
 * Query filters for tokens
 */
export interface TokenQueryFilters extends QueryFilters {

  /**
   * The minimum / maximum token activation date.
   */
  activationPeriod?: Array<string>;

  /**
   * Either id or a principal (login name, e-mail, etc) for brokers
   */
  brokers?: Array<string>;

  /**
   * The minimum / maximum token expiry date.
   */
  expiryPeriod?: Array<string>;

  /**
   * Either id or internal names of groups / group sets
   */
  groups?: Array<string>;

  /**
   * The desired token statuses
   */
  statuses?: Array<TokenStatusEnum>;

  /**
   * Either id or a principal (login name, e-mail, etc) for the token owner user
   */
  user?: string;

  /**
   * The token value
   */
  value?: string;
}
