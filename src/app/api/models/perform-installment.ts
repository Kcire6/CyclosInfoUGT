/* tslint:disable */

/**
 * An installment definition when performing a scheduled payment
 */
export interface PerformInstallment {

  /**
   * The installment amount
   */
  amount: string;

  /**
   * The installment due date
   */
  dueDate: string;
}
