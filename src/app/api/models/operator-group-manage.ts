/* tslint:disable */
import { OperatorGroupAccount } from './operator-group-account';
import { OperatorGroupPayment } from './operator-group-payment';

/**
 * Common fields for either creating or editing an operator group
 */
export interface OperatorGroupManage {

  /**
   * Defines how operators access the owner accounts, and defines restrictions on payment notifications. The key is the account type id or internal name.
   */
  accounts?: { [key: string]: OperatorGroupAccount };

  /**
   * Can operators of this group block their own tokens (cards)?
   */
  blockToken?: boolean;

  /**
   * Can operators of this group perform brokering operations? This includes full brokering operatations the user is allowed, including user registration, accounts access, payments as user, etc.
   */
  brokering?: boolean;

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
   * The operator group name
   */
  name?: string;

  /**
   * Can operators of this group own notifications?
   */
  notifications?: boolean;

  /**
   * Ids / internal names of custom operators that operators of this group will only be able to run
   */
  operations?: Array<string>;

  /**
   * Defines which payment types can be used by operators to perform payments or authorize payments performed by other operators. Also defines the maximum daily amount that can be paid per operator.
   */
  payments?: { [key: string]: OperatorGroupPayment };

  /**
   * Can operators of this group receive payments?
   */
  receivePayments?: boolean;

  /**
   * Ids / internal names of record types that operators of this group will only be able to access
   */
  records?: Array<string>;

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
  restrictPaymentsToUsers?: Array<string>;

  /**
   * Can operators of this group unblock their own tokens (cards)?
   */
  unblockToken?: boolean;

  /**
   * Can operators of this group view advertisements?
   */
  viewAdvertisements?: boolean;
}
