/* tslint:disable */
import { BaseTransQueryFilters } from './base-trans-query-filters';
import { TransactionAuthorizationStatusEnum } from './transaction-authorization-status-enum';
import { TransactionKind } from './transaction-kind';

/**
 * Base query filters for either transactions or installments
 */
export interface BaseTransactionOrInstallmentQueryFilters extends BaseTransQueryFilters {

  /**
   * Id or other identifier (login name, email, etc) of the user that performed an authorization action (authorize, deny or cancel).
   */
  authorizationPerformedBy?: string;

  /**
   * Authorization statuses used as search criteria. When set, only kinds that can go through authorization are returned (`payment`, `order`, `recurringPayment` or `scheduledPayment`).
   */
  authorizationStatuses?: Array<TransactionAuthorizationStatusEnum>;

  /**
   * When set, will only return transactions that went through the authorization process (if true) or that never went through it (when false). In either case, only kinds that can go through authorization are returned (`payment`, `order`, `recurringPayment` or `scheduledPayment`).
   */
  authorized?: boolean;
  kinds?: Array<TransactionKind>;
}
