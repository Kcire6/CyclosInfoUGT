/* tslint:disable */
import { AdDetailed } from './ad-detailed';
import { Address } from './address';

/**
 * Contains data returned when searching for advertisements
 */
export interface AdResult extends AdDetailed {

  /**
   * Address to be placed on map. Is only returned when the search result type is `map`.
   */
  address?: Address;

  /**
   * Indicates if the advertisement can be added to the cart.
   */
  canAddToCart?: boolean;

  /**
   * Either internal name or id of categories this advertisement belongs to. In most cases an advertisement will have a single category, but this depends on the Cyclos configuration.
   */
  categories?: Array<string>;

  /**
   * Either internal name or id of the advertisement's price currency
   */
  currency?: string;

  /**
   * Only returned when there is a base location to calculate the distance from. The unit (kilometers or miles) depends on configuration.
   */
  distance?: number;

  /**
   * Indicates if the advertisement can be edited according to the logged user's permissions and advertisement status.
   */
  editable?: boolean;
}
