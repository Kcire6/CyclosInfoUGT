/* tslint:disable */
import { OrderManage } from './order-manage';

/**
 * A new order to be created
 */
export interface OrderNew extends OrderManage {

  /**
   * Either internal id or other accepted identification (username, e-mail, etc) for the buyer
   */
  buyer?: string;

  /**
   * Either internal name or id of the order currency.
   */
  currency?: string;
}
