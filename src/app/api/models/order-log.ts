/* tslint:disable */
import { OrderStatusEnum } from './order-status-enum';
import { User } from './user';

/**
 * Information regarding a specific order status change
 */
export interface OrderLog {
  by?: User;

  /**
   * When the chage was made
   */
  date?: string;

  /**
   * The remarks associated to the change made by the user
   */
  remarks?: string;

  /**
   * The new status for the order
   */
  status?: OrderStatusEnum;
}
