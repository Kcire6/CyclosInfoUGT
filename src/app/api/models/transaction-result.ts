/* tslint:disable */
import { AccountKind } from './account-kind';
import { AccountWithOwner } from './account-with-owner';
import { BaseTransactionResult } from './base-transaction-result';
import { User } from './user';

/**
 * Represents a transaction, as viewed from the point-of-view of an account owner. This means that credits will have a positive amount, while debits will be negative.
 */
export interface TransactionResult extends BaseTransactionResult {

  /**
   * Either from or to account
   */
  related?: AccountWithOwner;

  /**
   * Use `related.kind` instead.
   *
   * @deprecated
   */
  relatedKind?: AccountKind;

  /**
   * Contains an optional custom from / to name, which can be set when the transaction is performed.
   */
  relatedName?: string;

  /**
   * Use `related.user` instead.
   *
   * @deprecated
   */
  relatedUser?: User;
}
