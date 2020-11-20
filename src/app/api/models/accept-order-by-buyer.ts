/* tslint:disable */
import { BaseOrderAction } from './base-order-action';

/**
 * Parameters used to accept an order by the buyer.
 */
export interface AcceptOrderByBuyer extends BaseOrderAction {

  /**
   * Either the internal name or id of the selected payment type (if any).
   */
  paymentType?: string;
}
