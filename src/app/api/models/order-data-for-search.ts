/* tslint:disable */
import { Currency } from './currency';
import { OrderQueryFilters } from './order-query-filters';
import { User } from './user';

/**
 * Data for searching orders (purchases / sales)
 */
export interface OrderDataForSearch {

  /**
   * Whether the logged user can create a new sale or not.
   */
  canCreateNew?: boolean;

  /**
   * The visible currencies the user have. Only for sales
   */
  currencies?: Array<Currency>;

  /**
   * The order number mask according to the webshop settings if it is manually generated. Only for sales
   */
  numberMask?: string;

  /**
   * Default query filters to search operators
   */
  query?: OrderQueryFilters;
  user?: User;
}
