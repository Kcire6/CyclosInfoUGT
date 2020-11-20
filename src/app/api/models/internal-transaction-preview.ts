/* tslint:disable */
import { AccountWithOwner } from './account-with-owner';
import { TransactionPreview } from './transaction-preview';
import { User } from './user';

/**
 * Base definitions for a preview before performing an internal transaction
 */
export interface InternalTransactionPreview extends TransactionPreview {

  /**
   * Indicates whether the transaction would be initially pending authorization in order to be processed
   */
  pendingAuthorization?: boolean;
  toAccount?: AccountWithOwner;

  /**
   * The operator who is receiving the payment. Only sent if the payment is made to an operator.
   */
  toOperator?: User;
}
