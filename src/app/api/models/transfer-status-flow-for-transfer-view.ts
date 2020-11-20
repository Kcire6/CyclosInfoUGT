/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';
import { TransferStatusLog } from './transfer-status-log';

/**
 * Contains other data for a transfer status flow when viewing a transfer.
 */
export interface TransferStatusFlowForTransferView extends InternalNamedEntity {

  /**
   * Can this status flow be managed by the authenticated user?
   */
  canManage?: boolean;

  /**
   * A log of status changes for this flow
   */
  log?: Array<TransferStatusLog>;
}
