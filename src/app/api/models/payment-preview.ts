/* tslint:disable */
import { InstallmentPreview } from './installment-preview';
import { InternalTransactionPreview } from './internal-transaction-preview';
import { PerformPayment } from './perform-payment';
import { TransferFeePreview } from './transfer-fee-preview';

/**
 * Preview of either a direct or scheduled payment
 */
export interface PaymentPreview extends InternalTransactionPreview {

  /**
   * The balance aging counter used for this payment
   */
  ARate?: string;

  /**
   * The balance maturity used for this payment
   */
  DRate?: string;

  /**
   * Only returned for direct payments. Contains the fees that would be paid by the payer if the payment is confirmed.
   */
  fees?: Array<TransferFeePreview>;

  /**
   * Only returned for scheduled payments. Contains the previews of each installment, if the payment is confirmed.
   */
  installments?: Array<InstallmentPreview>;

  /**
   * This reflects the new transaction amount. Depending on the configured fees, it could happen that the fee amount is deducted from transaction amount. If no fees deduct, it will be the same as transaction amount.  E.g: payment from A to B by 100 units with two fees: 10 units deducted from payment amount and other of 15 not deducted. Then the `totalAmount` will be 115, 90 for the `mainAmount`, 10 for the first fee and 15 for  the other fee.
   */
  mainAmount?: string;

  /**
   * Depending on the configuration, some script might alter the payment object, for example, filling in custom fields. This object can be used to show the actual data to the user, and to be posted again to the `POST /{owner}/payments/` path.
   */
  payment?: PerformPayment;

  /**
   * The number of days until the present balance reaches its maturity
   */
  previousDRate?: string;

  /**
   * True if the payment should be performed directly without showing the preview. If there is a `confirmationPasswordInput` defined then this flag will be false regardless the setting in the transfer type.
   */
  skipConfirmation?: boolean;

  /**
   * The maturity used for this payment
   */
  transferDRate?: string;
}
