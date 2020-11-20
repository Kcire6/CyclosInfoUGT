/* tslint:disable */
import { AccountPermissions } from './account-permissions';
import { ExternalPaymentsPermissions } from './external-payments-permissions';
import { PaymentRequestsPermissions } from './payment-requests-permissions';
import { PaymentsPermissions } from './payments-permissions';
import { ScheduledPaymentsPermissions } from './scheduled-payments-permissions';
import { TicketsPermissions } from './tickets-permissions';
import { TransactionAuthorizationsPermissions } from './transaction-authorizations-permissions';

/**
 * Permissions for banking
 */
export interface BankingPermissions {

  /**
   * Permissions over each owned account
   */
  accounts?: Array<AccountPermissions>;

  /**
   * Transaction authorization permissions
   */
  authorizations?: TransactionAuthorizationsPermissions;

  /**
   * External payments permissions
   */
  externalPayments?: ExternalPaymentsPermissions;

  /**
   * Payment requests permissions
   */
  paymentRequests?: PaymentRequestsPermissions;

  /**
   * Payments permissions
   */
  payments?: PaymentsPermissions;

  /**
   * Recurring payment permissions are no longer separated from scheduled payment permissions. Use `scheduledPayments` instead.
   *
   *
   * Recurring payments permissions
   *
   * @deprecated
   */
  recurringPayments?: ScheduledPaymentsPermissions;

  /**
   * Scheduled payments permissions
   */
  scheduledPayments?: ScheduledPaymentsPermissions;

  /**
   * Can the authenticated admin / broker perform a general transaction search for authorizations?
   */
  searchGeneralAuthorizedPayments?: boolean;

  /**
   * Can the authenticated admin / broker perform a general account balance limit search, for all visible accounts?
   */
  searchGeneralBalanceLimits?: boolean;

  /**
   * Can the authenticated admin / broker perform a general external payments search?
   */
  searchGeneralExternalPayments?: boolean;

  /**
   * Can the authenticated admin / broker perform a general account payment limit search, for all visible accounts?
   */
  searchGeneralPaymentLimits?: boolean;

  /**
   * Can the authenticated admin / broker perform a general payment requests search?
   */
  searchGeneralPaymentRequests?: boolean;

  /**
   * Can the authenticated admin / broker perform a general scheduled payments / installments search?
   */
  searchGeneralScheduledPayments?: boolean;

  /**
   * Can the authenticated admin / broker perform a general transfers search (all visible transfers, regardless of the user / account)?
   */
  searchGeneralTransfers?: boolean;

  /**
   * Can the authenticated admin / broker search managed users together with their account balances?
   */
  searchUsersWithBalances?: boolean;

  /**
   * Tickets permissions
   */
  tickets?: TicketsPermissions;
}
