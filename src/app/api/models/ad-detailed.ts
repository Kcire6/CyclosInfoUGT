/* tslint:disable */
import { BaseAdDetailed } from './base-ad-detailed';
import { DatePeriod } from './date-period';
import { User } from './user';

/**
 * Contains data which is common for `AdResult` and `AdView`
 */
export interface AdDetailed extends BaseAdDetailed {

  /**
   * The advertisement description content, formatted as HTML
   */
  description?: string;

  /**
   * The maximum quantity that can be specified in the shopping cart.
   */
  maxAllowedInCart?: string;

  /**
   * The minimum quantity that can be specified in the shopping cart.
   */
  minAllowedInCart?: string;

  /**
   * Use `user` instead.
   *
   * @deprecated
   */
  owner?: User;

  /**
   * The promotional price, to be applied on the promotional period is active
   */
  promotionalPrice?: string;
  publicationPeriod?: DatePeriod;

  /**
   * The stock disponibility. Only if `unlimitedStock` is false and the  'Stock type' was not marked as 'Not available' (through the web  interface).
   */
  stockQuantity?: string;

  /**
   * If true then it means there is always disponibility of the webshop ad.
   */
  unlimitedStock?: boolean;

  /**
   * The user which owns this ad
   */
  user?: User;
}
