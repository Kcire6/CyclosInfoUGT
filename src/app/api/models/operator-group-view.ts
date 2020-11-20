/* tslint:disable */
import { NamedEntity } from './named-entity';
import { Operation } from './operation';
import { OperatorGroupAccountView } from './operator-group-account-view';
import { OperatorGroupPaymentView } from './operator-group-payment-view';
import { RecordType } from './record-type';
import { User } from './user';

/**
 * Detailed information when viewing an operator group
 */
export interface OperatorGroupView extends NamedEntity {

  /**
   * Settings for the access operators will have over owner accounts.
   */
  accounts?: Array<OperatorGroupAccountView>;

  /**
   * Can operators of this group block their own tokens (cards)?
   */
  blockToken?: boolean;

  /**
   * Can operators of this group perform brokering operations?
   */
  brokering?: boolean;

  /**
   * Can the authenticated user edit / remove this operator group?
   */
  canEdit?: boolean;

  /**
   * Can operators of this group cancel their own tokens (cards)?
   */
  cancelToken?: boolean;

  /**
   * Can operators of this group chargeback payments received by the owner?
   */
  chargebackPayments?: boolean;

  /**
   * Optional description of the group
   */
  description?: string;

  /**
   * Can operators of this group edit their own profile?
   */
  editOwnProfile?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit / remove this operator group?
   *
   * @deprecated
   */
  editable?: boolean;

  /**
   * Can operators of this group have tokens (cards)?
   */
  enableToken?: boolean;

  /**
   * Can operators of this group manage advertisements of the owner?
   */
  manageAdvertisements?: boolean;

  /**
   * Can operators of this group access the message box of the owner?
   */
  messages?: boolean;

  /**
   * Can operators of this group own notifications?
   */
  notifications?: boolean;

  /**
   * Custom operators that operators of this group will only be able to run
   */
  operations?: Array<Operation>;

  /**
   * Settings for payments that can be performed by operators.
   */
  payments?: Array<OperatorGroupPaymentView>;

  /**
   * Can operators of this group receive payments?
   */
  receivePayments?: boolean;

  /**
   * Record types that operators of this group will only be able to access
   */
  records?: Array<RecordType>;

  /**
   * Can operators of this group redeem vouchers?
   */
  redeemVouchers?: boolean;

  /**
   * Can operators of this group request payments?
   */
  requestPayments?: boolean;

  /**
   * When set, operators of this group will only be able to perform payments to one of this users
   */
  restrictPaymentsToUsers?: Array<User>;

  /**
   * Can operators of this group unblock their own tokens (cards)?
   */
  unblockToken?: boolean;

  /**
   * The user which owns this operator group
   */
  user?: User;

  /**
   * Can operators of this group view advertisements?
   */
  viewAdvertisements?: boolean;
}
