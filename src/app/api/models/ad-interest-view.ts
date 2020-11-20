/* tslint:disable */
import { AdCategoryWithParent } from './ad-category-with-parent';
import { AdInterest } from './ad-interest';
import { AdKind } from './ad-kind';
import { Currency } from './currency';
import { User } from './user';

/**
 * Details of an advertisement interest
 */
export interface AdInterestView extends AdInterest {

  /**
   * Owner of advertisements
   */
  adUser?: User;

  /**
   * Can the authenticated user edit this advertisement interest?
   */
  canEdit?: boolean;

  /**
   * Can the authenticated user remove this advertisement interest?
   */
  canRemove?: boolean;

  /**
   * The advertisements category.
   */
  category?: AdCategoryWithParent;

  /**
   * Currency for the price range.
   */
  currency?: Currency;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit this advertisement interest?
   *
   * @deprecated
   */
  edit?: boolean;

  /**
   * Set of keywords to match advertisements.
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
   * Use `canRemove` instead.
   *
   *
   * Can the authenticated user remove this advertisement interest?
   *
   * @deprecated
   */
  remove?: boolean;

  /**
   * Owner of this advertisement interest
   */
  user?: User;
}
