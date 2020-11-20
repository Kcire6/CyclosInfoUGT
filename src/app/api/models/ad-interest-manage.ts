/* tslint:disable */
import { AdKind } from './ad-kind';

/**
 * Common fields for either creating or editing an advertisement interest
 */
export interface AdInterestManage {

  /**
   * Either internal name or id of the advertisements category.
   */
  category?: string;

  /**
   * Either internal name or id of the currency for price range.
   */
  currency?: string;

  /**
   * A set of keywords to match advertisements.
   */
  keywords?: Array<string>;

  /**
   * The kind of advertisements.
   */
  kind?: AdKind;

  /**
   * Maximum price for advertisements.
   */
  maxPrice?: string;

  /**
   * Minimum price for advertisements.
   */
  minPrice?: string;

  /**
   * The name identifying this advertisement interest.
   */
  name?: string;

  /**
   * Either internal id or other accepted identification (username, e-mail, etc) for the user to watch advertisements
   */
  user?: string;
}
