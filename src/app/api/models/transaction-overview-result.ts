/* tslint:disable */
import { AccountKind } from './account-kind';
import { AccountWithOwner } from './account-with-owner';
import { BaseTransactionResult } from './base-transaction-result';
import { User } from './user';

/**
 * Represents a transaction.
 */
export interface TransactionOverviewResult extends BaseTransactionResult {

  /**
   * The debited account
   */
  from?: AccountWithOwner;

  /**
   * Use `from.kind` instead.
   *
   * @deprecated
   */
  fromKind?: AccountKind;

  /**
   * Contains an optional custom from name, which can be set when the transaction is performed.
   */
  fromName?: string;

  /**
   * Use `from.user` instead.
   *
   * @deprecated
   */
  fromUser?: User;

  /**
   * The credited account
   */
  to?: AccountWithOwner;

  /**
   * Use `to.kind` instead.
   *
   * @deprecated
   */
  toKind?: AccountKind;

  /**
   * Contains an optional custom to name, which can be set when the transaction is performed.
   */
  toName?: string;

  /**
   * Use `to.user` instead.
   *
   * @deprecated
   */
  toUser?: User;
}
