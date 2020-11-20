/* tslint:disable */
import { PaymentRequestSchedulingEnum } from './payment-request-scheduling-enum';
import { PerformInternalTransaction } from './perform-internal-transaction';

/**
 * Definitions used to send a payment request. The request has an expiration date (which can be hidden from the user, depending on the configuration) and can be set to be scheduled.
 */
export interface SendPaymentRequest extends PerformInternalTransaction {

  /**
   * The payment request expiration date. Required, unless the expiration date is configured in the payment type to be hidden from users.
   */
  expirationDate?: string;

  /**
   * Indicates whether the first installment should be immediately processed once the scheduled payment is accepted. Used only if `scheduling` is `scheduled`. When not explicitly set to `false` will process the first installment immediately.
   */
  firstInstallmentIsImmediate?: boolean;

  /**
   * Indicates whether the first occurrence should be immediately processed once the recurring payment is accepted. Used only if `scheduling` is `enum:PaymentRequestSchedulingEnum.recurring`. When not explicitly set to `false` will process the first occurrence immediately.
   */
  firstOccurrenceIsImmediate?: boolean;

  /**
   * Represents the number of installments. When not specified, assumes a single installment. Used only if `scheduling` is `scheduled`.
   */
  installmentsCount?: number;

  /**
   * Represents the number of occurrences. When not specified, assumes a the payment will continue until be manually canceled. Used only if `scheduling` is `enum:PaymentRequestSchedulingEnum.recurring`.
   */
  occurrencesCount?: number;
  scheduling?: PaymentRequestSchedulingEnum;
}
