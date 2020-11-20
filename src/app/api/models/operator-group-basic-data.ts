/* tslint:disable */
import { AccountType } from './account-type';
import { Operation } from './operation';
import { RecordType } from './record-type';
import { TransferTypeWithCurrency } from './transfer-type-with-currency';
import { User } from './user';

/**
 * Contains data shared by both OperatorGroupDataForNew and OperatorGroupDataForEdit
 */
export interface OperatorGroupBasicData {

  /**
   * Account types details for the account settings
   */
  accountTypes?: Array<AccountType>;

  /**
   * Indicates whether the owner user is a broker. If so, can delegate brokering operations to operators.
   */
  broker?: boolean;

  /**
   * Can the permission to block tokens (cards) be granted?
   */
  canBlockToken?: boolean;

  /**
   * Can the permission to cancel tokens (cards) be granted?
   */
  canCancelToken?: boolean;

  /**
   * Can the permission to chargeback payments be granted?
   */
  canChargebackPayments?: boolean;

  /**
   * Can the permission to enable tokens (cards) be granted?
   */
  canEnableToken?: boolean;

  /**
   * Can the permission over messages be granted?
   */
  canHaveMessages?: boolean;

  /**
   * Can the permission over notificationsto be granted?
   */
  canHaveNotifications?: boolean;

  /**
   * Can the permission to manage advertisements be granted?
   */
  canManageAdvertisements?: boolean;

  /**
   * Can the permission to receive payments be granted?
   */
  canReceivePayments?: boolean;

  /**
   * Can the permission to redeem vouchers be granted?
   */
  canRedeemVouchers?: boolean;

  /**
   * Can the permission to request payments be granted?
   */
  canRequestPayments?: boolean;

  /**
   * Can the permission to unblock tokens (cards) be granted?
   */
  canUnblockToken?: boolean;

  /**
   * Can the permission to view advertisements be granted?
   */
  canViewAdvertisements?: boolean;

  /**
   * Custom operations that can be granted
   */
  operations?: Array<Operation>;

  /**
   * Payment types details for the payment settings
   */
  paymentTypes?: Array<TransferTypeWithCurrency>;

  /**
   * Record types that can be granted
   */
  recordTypes?: Array<RecordType>;

  /**
   * Details of the user that is the owner of the operator group
   */
  user?: User;
}
