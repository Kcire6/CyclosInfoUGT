/* tslint:disable */
import { BaseTransQueryFilters } from './base-trans-query-filters';
import { TransferKind } from './transfer-kind';

/**
 * Base definitions for searching transfers
 */
export interface BaseTransferQueryFilters extends BaseTransQueryFilters {

  /**
   * When set to either `true` will only return transfers that were charged-back. When set to `false`, will only return transfers that were not charged-back. When left blank will not filter by this creterion.
   */
  chargedBack?: boolean;

  /**
   * The kind of transfers to return
   */
  kinds?: Array<TransferKind>;

  /**
   * Transfer statuses used as search criteria. Each array element should be either the identifier or the status qualified internal name, composed by flow internal name, a dot, and the status internal name. For example, `loan.open` would be a valid internal name.
   */
  statuses?: Array<string>;

  /**
   * Use `kinds` instead.
   *
   * @deprecated
   */
  transferKinds?: Array<TransferKind>;
}
