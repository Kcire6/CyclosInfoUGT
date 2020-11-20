/* tslint:disable */
import { AccountKind } from './account-kind';
import { Trans } from './trans';
import { TransactionAuthorizationStatusEnum } from './transaction-authorization-status-enum';
import { TransactionKind } from './transaction-kind';
import { User } from './user';

/**
 * Reference to a transaction
 */
export interface Transaction extends Trans {
  authorizationStatus?: TransactionAuthorizationStatusEnum;

  /**
   * The optional transaction description.
   */
  description?: string;

  /**
   * Use `from.kind` instead.
   *
   *
   * The kind of account owner that sent the transaction. WARNING: for kinds `paymentRequest` and `ticket` will represent the `to` account. This way the pre-Cyclos 4.13 semantic is kept. But keep this in mind that when updating your client code.
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
   *
   * The kind of account owner that sent the transaction. WARNING: for kinds `paymentRequest` and `ticket` will represent the `to` account. This way the pre-Cyclos 4.13 semantic is kept. But keep this in mind that when updating your client code.
   *
   * @deprecated
   */
  fromUser?: User;

  /**
   * The transaction kind. For example, if the front end has distinct views for a regular payment, scheduled payment and so on, this information is useful to determine the actual view.
   */
  kind?: TransactionKind;

  /**
   * A 32-length alphanumeric ticket identifier. Only returned if kind is `ticket`.
   */
  ticketNumber?: string;

  /**
   * Use `to.kind` instead.
   *
   *
   * The kind of account owner that sent the transaction. WARNING: for kinds `paymentRequest` and `ticket` will represent the `from` account. This way the pre-Cyclos 4.13 semantic is kept. But keep this in mind that when updating your client code.
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
   *
   * The kind of account owner that sent the transaction. WARNING: for kinds `paymentRequest` and `ticket` will represent the `from` account. This way the pre-Cyclos 4.13 semantic is kept. But keep this in mind that when updating your client code.
   *
   * @deprecated
   */
  toUser?: User;
}
