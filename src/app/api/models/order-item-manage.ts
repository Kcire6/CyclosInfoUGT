/* tslint:disable */

/**
 * Data for create / edit an order item
 */
export interface OrderItemManage {

  /**
   * The charged price of the product.
   */
  price?: string;

  /**
   * Can be either the ad webshop internal identifier or the product number. If the number is solely comprised of numbers, it must be prefixed by a single quote.
   */
  product?: string;

  /**
   * It represents how much of the product was ordered.  It could be a decimal number only if it's allowed by the  product (i.e the webshopad).
   */
  quantity?: string;
}
