/* tslint:disable */
import { TransferFeePreview } from './transfer-fee-preview';

/**
 * Preview of an installment
 */
export interface InstallmentPreview {

  /**
   * The installment due date
   */
  dueDate?: string;

  /**
   * Only returned for direct payments. Contains the fees that would be paid by the payer if the payment is confirmed.
   */
  fees?: Array<TransferFeePreview>;

  /**
   * Depending on the configured fees, it could happen that the main amount is deducted from fees amount. This reflects the new main amount. If no fees deduct, it will be the same as `totalAmount`.
   */
  mainAmount?: string;

  /**
   * The installment number
   */
  number?: number;

  /**
   * The final total installment amount
   */
  totalAmount?: string;
}
