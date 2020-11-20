/* tslint:disable */
import { BaseTransDataForSearch } from './base-trans-data-for-search';
import { TransferStatusFlow } from './transfer-status-flow';

/**
 * Contains basic information used to search for transfers
 */
export interface BaseTransferDataForSearch extends BaseTransDataForSearch {

  /**
   * References to the allowed transfer status flows for this account
   */
  transferStatusFlows?: Array<TransferStatusFlow>;
}
