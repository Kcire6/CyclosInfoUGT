/* tslint:disable */
import { EntityReference } from './entity-reference';
import { ExternalPaymentStatusEnum } from './external-payment-status-enum';
import { Installment } from './installment';
import { PaymentRequestStatusEnum } from './payment-request-status-enum';
import { RecurringPaymentStatusEnum } from './recurring-payment-status-enum';
import { ScheduledPaymentStatusEnum } from './scheduled-payment-status-enum';
import { TicketStatusEnum } from './ticket-status-enum';
import { TransResult } from './trans-result';
import { TransactionAuthorizationStatusEnum } from './transaction-authorization-status-enum';
import { TransactionKind } from './transaction-kind';

/**
 * Base fields for transaction result
 */
export interface BaseTransactionResult extends TransResult {
  authorizationStatus?: TransactionAuthorizationStatusEnum;

  /**
   * Either internal name or id of the transaction currency.
   */
  currency?: string;

  /**
   * Only returned if the `kind` is either `paymentRequest`, `externalPayment` or `ticket`. The deadline for the payment to be processed.  In case of `externalPayment` if no user is registered with either e-mail or mobile phone matching, it is canceled. The same is done in case of `ticket` if it is not accepted by any user.
   */
  expirationDate?: string;

  /**
   * The external payment status. Only returned if `kind` is `externalPayment`.
   */
  externalPaymentStatus?: ExternalPaymentStatusEnum;

  /**
   * A reference to the first installment of this scheduled payment. Only returned if `kind` is `scheduledPayment`.
   */
  firstInstallment?: Installment;

  /**
   * A reference to the first installment which is still open. Only returned if `kind` is `scheduledPayment`.
   */
  firstOpenInstallment?: Installment;

  /**
   * The total number of installments. Only returned if `kind` is `scheduledPayment`.
   */
  installmentCount?: number;

  /**
   * The transaction kind. For example, if the front end has distinct views for a regular payment, scheduled payment and so on, this information is useful to determine the actual view.
   */
  kind?: TransactionKind;

  /**
   * The number of the last processed occurrence
   */
  lastOccurrenceNumber?: number;

  /**
   * When the next recurring payment occurrence will be processed. Only returned if `kind` is `recurringPayment`.
   */
  nextOccurrenceDate?: string;

  /**
   * The total number of occurrences to process. When null will be processed until manually canceled. Only returned if `kind` is `recurringPayment`.
   */
  occurrencesCount?: number;

  /**
   * The payment request status. Only returned if `kind` is `paymentRequest`.
   */
  paymentRequestStatus?: PaymentRequestStatusEnum;

  /**
   * The number of processed installments. Only returned if `kind` is `scheduledPayment`.
   */
  processedInstallments?: number;

  /**
   * The recurring payment status. Only returned if `kind` is `recurringPayment`.
   */
  recurringPaymentStatus?: RecurringPaymentStatusEnum;

  /**
   * The scheduled payment status. Only returned if `kind` is `scheduledPayment`.
   */
  scheduledPaymentStatus?: ScheduledPaymentStatusEnum;

  /**
   * The ticket status. Only returned if `kind` is `ticket`.
   */
  ticketStatus?: TicketStatusEnum;

  /**
   * The principal type an external payment was sent to. Only returned if `kind` is `externalPayment`.
   */
  toPrincipalType?: EntityReference;

  /**
   * The principal to which an external payment was sent to. Only returned if `kind` is `externalPayment`.
   */
  toPrincipalValue?: string;
}
