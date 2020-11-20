/* tslint:disable */
import { AdCategoriesDisplayEnum } from './ad-categories-display-enum';
import { AdCategoryWithChildren } from './ad-category-with-children';
import { AdKind } from './ad-kind';
import { AddressQueryFieldEnum } from './address-query-field-enum';
import { BasicProfileFieldInput } from './basic-profile-field-input';
import { Currency } from './currency';
import { CustomFieldDetailed } from './custom-field-detailed';
import { SearchByDistanceData } from './search-by-distance-data';

/**
 * Common definitions for searching advertisements
 */
export interface BaseAdDataForSearch {
  addressFieldsInSearch?: Array<AddressQueryFieldEnum>;

  /**
   * The list of basic user profile fields that can be used as search filters. Only returned if searching user advertisements.
   */
  basicProfileFields?: Array<BasicProfileFieldInput>;

  /**
   * The advertisement categories each with its children, forming a tree
   */
  categories?: Array<AdCategoryWithChildren>;

  /**
   * The category view configured for the logged user.
   */
  categoriesDisplay?: AdCategoriesDisplayEnum;

  /**
   * The currencies the authenticated user may use to filter by price
   */
  currencies?: Array<Currency>;

  /**
   * The list of custom fields that are either to be used as search filter (if its internal name is present on either  `fieldsInBasicSearch` or `fieldsInAdvancedSearch`) and / or in the result list (if its internal name is present on `fieldsInList`).
   */
  customFields?: Array<CustomFieldDetailed>;

  /**
   * The list of custom user profile fields that can be used as search filters. Only returned if searching user advertisements.
   */
  customProfileFields?: Array<CustomFieldDetailed>;

  /**
   * The internal names of the custom fields that should be used as search filters in the advanced section (separated fields, not keywords)
   */
  fieldsInAdvancedSearch?: Array<string>;

  /**
   * The internal names of the custom fields that should be used as search filters in the basic section (separated fields, not keywords)
   */
  fieldsInBasicSearch?: Array<string>;

  /**
   * The internal names of the custom fields that will be returned together with each advertisement, and should be shown in the result list. This feature is planned, but not yet available.
   */
  fieldsInList?: Array<string>;
  searchByDistanceData?: SearchByDistanceData;

  /**
   * The advertisement kinds that can be searched by the authenticated user
   */
  visibleKinds?: Array<AdKind>;
}
