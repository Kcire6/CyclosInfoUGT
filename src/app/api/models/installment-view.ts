/* tslint:disable */
import { Installment } from './installment';
import { User } from './user';

/**
 * Contains details about an installment
 */
export interface InstallmentView extends Installment {

  /**
   * The user that performed an status change. For example, who manually paid, settled or canceled an open installment
   */
  by?: User;

  /**
   * Can the authenticated user process this installment?
   */
  canProcess?: boolean;

  /**
   * Can the authenticated user settle this installment?
   */
  canSettle?: boolean;

  /**
   * Use `transferTransactionNumber` instead.
   *
   *
   * Only if the installment was processed, contains the transaction number of the generated transfer.
   *
   * @deprecated
   */
  transactionNumber?: string;

  /**
   * The date the transfer was processed.
   */
  transferDate?: string;

  /**
   * Only if the installment was processed, contains the internal identifier of the generated transfer.
   */
  transferId?: string;

  /**
   * Only if the installment was processed, contains the transaction number of the generated transfer.
   */
  transferTransactionNumber?: string;
}
