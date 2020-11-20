/* tslint:disable */
import { Entity } from './entity';
import { InstallmentStatusEnum } from './installment-status-enum';

/**
 * Reference to a scheduled payment installment
 */
export interface Installment extends Entity {

  /**
   * The installment amount
   */
  amount?: string;

  /**
   * The installment due date.
   */
  dueDate?: string;

  /**
   * The installment number.
   */
  number?: number;
  status?: InstallmentStatusEnum;
}
