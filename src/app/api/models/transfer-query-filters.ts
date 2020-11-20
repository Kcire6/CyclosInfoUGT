/* tslint:disable */
import { BaseTransferQueryFilters } from './base-transfer-query-filters';

/**
 * Query filters for transfers
 */
export interface TransferQueryFilters extends BaseTransferQueryFilters {

  /**
   * Either ids or internal names of the currency
   */
  currencies?: Array<string>;

  /**
   * Use `currencies` instead.
   *
   *
   * Either id or internal name of the currency
   *
   * @deprecated
   */
  currency?: string;

  /**
   * Use `fromAccountTypes` instead.
   *
   *
   * Either ids or internal names of the origin account type
   *
   * @deprecated
   */
  fromAccountType?: string;

  /**
   * Either ids or internal names of the origin account type
   */
  fromAccountTypes?: Array<string>;

  /**
   * Use `toAccountTypes` instead.
   *
   *
   * Either ids or internal names of the destination account type
   *
   * @deprecated
   */
  toAccountType?: string;

  /**
   * Either ids or internal names of the destination account type
   */
  toAccountTypes?: Array<string>;
}
