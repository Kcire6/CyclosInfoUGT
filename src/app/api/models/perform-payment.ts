/* tslint:disable */
import { PaymentSchedulingEnum } from './payment-scheduling-enum';
import { PerformInstallment } from './perform-installment';
import { PerformInternalTransaction } from './perform-internal-transaction';
import { TimeInterval } from './time-interval';

/**
 * Definitions used to perform either a direct, scheduled or recurring payment. Regarding scheduling, the `scheduling` field must be set if some scheduling option (other than direct payment) is desired. The scheduling possibilities are:
 *
 * - Direct payment: For a direct payment, leave empty the `scheduling`
 *   field or set it to `direct`;
 *
 * - Single future payment: For a payment scheduled to a future date, set
 *   the `scheduling` field to `scheduled` and set
 *   the `firstDueDate` property with the desired due date;
 *
 * - Multiple installments, being the first immediately and the rest with
 *   regular 1 month interval in-between: For this, set the `scheduling` field
 *   to `scheduled` and the `installmentsCount` to
 *   a value greater than 1;
 *
 * - Multiple installments, starting at a specific date, with other
 *   installments with regular 1 month interval in-between: For this, set the
 *   `scheduling` field to `scheduled`, the
 *   `installmentsCount` to a value greater than 1 and the
 *   `firstInstallmentDate` with a future date;
 *
 * - Custom installments: For a full control on the generated installments,
 *   set the `scheduling` field to `scheduled`
 *   and pass in the `installments` array. However, there are some rules:
 *
 *   - The total amount must be equals the sum of all installment amounts;
 *
 *   - The first due date must be in the future;
 *
 *   - The due dates of all installments must be in ascending order;
 *
 *   - There must be at least one day between distinct due dates.
 *
 * - Recurring payment with the first payment immediately, the others at fixed
 *   future dates: This can be achieved by setting the `scheduling` field to
 *   `recurring` and leaving blank the
 *   `firstOccurrenceDate`. It is possible to schedule a limited number of
 *   occurrences, by setting `occurrencesCount`, or until it is manually
 *   canceled, by leaving `occurrencesCount` empty. Also, it is possible to
 *   customize the interval (default is 1 month) between each occurrence, by
 *   setting the `occurrenceInterval` field.
 *
 * - Recurring payment starting in a future date: This can be achieved by
 *   setting the `scheduling` field to `recurring`
 *   and setting the `firstOccurrenceDate`. The other options, the fixed number
 *   of occurrences (`occurrencesCount`) and interval between each occurrence
 *   (`occurrenceInterval`) can be set just like the case above.
 */
export interface PerformPayment extends PerformInternalTransaction {

  /**
   * Represents the first installment date. When not specified, assumes the first installment is processed instantly. Used only if `scheduling` is `scheduled`. Can be used together with `installmentsCount` as an alternative to providing individual `installments` definitions.
   */
  firstInstallmentDate?: string;

  /**
   * Represents the first occurrence date for a recurring payment. If none is given, it is assumed that the first occurrence is immediate. Used only if `scheduling` is `recurring`.
   */
  firstOccurrenceDate?: string;

  /**
   * An array containing individual installments definitions, allowing full control over generated installments. Used only if `scheduling` is `scheduled`.
   */
  installments?: Array<PerformInstallment>;

  /**
   * Represents the number of installments. When not specified, assumes a single installment. Used only if `scheduling` is `scheduled`. Can be used together with `installmentsCount` as an alternative to providing individual `installments` definitions.
   */
  installmentsCount?: number;

  /**
   * If this payment is performed with a NFC token, must be the challenge (as returned by the server) encrypted by the NFC chip, encoded in HEX form (2 hex chars per byte).
   */
  nfcChallence?: string;

  /**
   * Defines the interval between payment occurrences. If none is given, it is assumed 1 month between occurrences. Used only if `scheduling` is `recurring`.
   */
  occurrenceInterval?: TimeInterval;

  /**
   * Represents the number of occurrences in a recurring payment. When not provided, the payment will be repeated until it is manually canceled. Used only if `scheduling` is `recurring`.
   */
  occurrencesCount?: number;
  scheduling?: PaymentSchedulingEnum;
}
