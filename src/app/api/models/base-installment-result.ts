/* tslint:disable */
import { Entity } from './entity';
import { InstallmentStatusEnum } from './installment-status-enum';

/**
 * Base fields for an installment result
 */
export interface BaseInstallmentResult extends Entity {

  /**
   * The installment amount.
   */
  amount?: string;

  /**
   * The installment due date
   */
  dueDate?: string;

  /**
   * The installment number
   */
  number?: number;

  /**
   * The installment status.
   */
  status?: InstallmentStatusEnum;

  /**
   * The total number of installments in the transaction. Only not returned if the installment belongs to a recurring payment with an unbound number of occurrences (until cancel).
   */
  totalInstallments?: number;

  /**
   * When processed, is the date of the generated transfer.
   */
  transferDate?: string;

  /**
   * When processed, is the id of the generated transfer.
   */
  transferId?: string;

  /**
   * When processed, is the transaction number of the generated transfer.
   */
  transferTransactionNumber?: string;
}
