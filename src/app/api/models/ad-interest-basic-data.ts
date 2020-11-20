/* tslint:disable */
import { AdCategoryWithChildren } from './ad-category-with-children';
import { Currency } from './currency';
import { User } from './user';

/**
 * Contains data shared by both AdInterestDataForNew and AdInterestDataForEdit
 */
export interface AdInterestBasicData {

  /**
   * Contains the list of possible categories for the advertisement interest
   */
  categories?: Array<AdCategoryWithChildren>;

  /**
   * Contains the list of possible currencies for the advertisement interest
   */
  currencies?: Array<Currency>;

  /**
   * Reference to the owner of the advertisement interest
   */
  user?: User;
}
