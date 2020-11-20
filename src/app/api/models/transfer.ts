/* tslint:disable */
import { Trans } from './trans';
import { TransferKind } from './transfer-kind';
import { TransferStatus } from './transfer-status';

/**
 * Reference to a balance transfer between accounts
 */
export interface Transfer extends Trans {
  kind?: TransferKind;

  /**
   * Contains the current status for each status flow this transfer has
   */
  statuses?: Array<TransferStatus>;
}
