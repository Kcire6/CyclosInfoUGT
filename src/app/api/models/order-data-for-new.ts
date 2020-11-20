/* tslint:disable */
import { Currency } from './currency';
import { OrderBasicData } from './order-basic-data';
import { OrderNew } from './order-new';

/**
 * Data for create a new order as the seller
 */
export interface OrderDataForNew extends OrderBasicData {

  /**
   * The available currencies for the sale
   */
  currencies?: Array<Currency>;

  /**
   * The order that is being created
   */
  order?: OrderNew;
}
