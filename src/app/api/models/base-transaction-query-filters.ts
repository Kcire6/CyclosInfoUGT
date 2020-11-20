/* tslint:disable */
import { BaseTransactionOrInstallmentQueryFilters } from './base-transaction-or-installment-query-filters';
import { ExternalPaymentStatusEnum } from './external-payment-status-enum';
import { PaymentRequestStatusEnum } from './payment-request-status-enum';
import { RecurringPaymentStatusEnum } from './recurring-payment-status-enum';
import { ScheduledPaymentStatusEnum } from './scheduled-payment-status-enum';
import { TicketStatusEnum } from './ticket-status-enum';

/**
 * Base query filters for transactions
 */
export interface BaseTransactionQueryFilters extends BaseTransactionOrInstallmentQueryFilters {

  /**
   * Statuses used as search criteria applied only to transactions of kind `externalPayment`.
   */
  externalPaymentStatuses?: Array<ExternalPaymentStatusEnum>;

  /**
   * The minimum / maximum date for payment request expiration. Only affects payment requests. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  paymentRequestExpiration?: Array<string>;

  /**
   * Statuses used as search criteria applied only to transactions of kind `paymentRequest`.
   */
  paymentRequestStatuses?: Array<PaymentRequestStatusEnum>;

  /**
   * Statuses used as search criteria applied only to transactions of kind `recurringPayment`. If this filter is not empty then pending recurring payments will be excluded from the result. Pending recurring payments does not have a status.
   */
  recurringPaymentStatuses?: Array<RecurringPaymentStatusEnum>;

  /**
   * Statuses used as search criteria applied only to transactions of kind `scheduledPayment`. If this filter is not empty then pending scheduled payments will be excluded from the result. Pending scheduled payments does not have a status.
   */
  scheduledPaymentStatuses?: Array<ScheduledPaymentStatusEnum>;

  /**
   * Statuses used as search criteria applied only to transactions of kind `ticket`.
   */
  ticketStatuses?: Array<TicketStatusEnum>;
}
