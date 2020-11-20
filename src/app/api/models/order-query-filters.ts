/* tslint:disable */
import { OrderStatusEnum } from './order-status-enum';
import { QueryFilters } from './query-filters';

/**
 * Search filters for orders.
 */
export interface OrderQueryFilters extends QueryFilters {

  /**
   * The minimum / maximum order creation date. Is expressed an array, with the lower bound as first element, and the upper bound as second element. When only one element, will have just the lower bound. To specify only the upper bound, prefix the value with a comma.
   */
  creationPeriod?: Array<string>;

  /**
   * The generated order number according to the webshop settings.
   */
  number?: string;

  /**
   * The product number (with the mask if there is one) of an advertisement contained in the orders.
   */
  productNumber?: string;

  /**
   * Either id or an identification, such as login name, e-mail, etc, for the seller or buyer according whether we are searching for purchases or sales. The allowed identification methods are those the authenticated user can use on keywords search.
   */
  relatedUser?: string;

  /**
   * Are we searching for sales or purchases? If not specified it's assumed purchases (i.e `false`)
   */
  sales?: boolean;
  statuses?: Array<OrderStatusEnum>;
}
