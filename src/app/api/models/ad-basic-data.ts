/* tslint:disable */
import { AdCategoryWithChildren } from './ad-category-with-children';
import { AdKind } from './ad-kind';
import { Address } from './address';
import { Currency } from './currency';
import { CustomFieldDetailed } from './custom-field-detailed';
import { DeliveryMethod } from './delivery-method';
import { User } from './user';
import { WebshopSettings } from './webshop-settings';

/**
 * Contains data shared by both AdDataForNew and AdDataForEdit
 */
export interface AdBasicData {

  /**
   * The public addresses of the advertisement owner, so specific ones can be linked to the advertisement.
   */
  addresses?: Array<Address>;

  /**
   * Indicates whether the user can create a new advertisement (if not reached max setting)
   */
  canCreateNew?: boolean;

  /**
   * The advertisement categories each with its children, forming a tree
   */
  categories?: Array<AdCategoryWithChildren>;

  /**
   * The currencies the authenticated user may use to specify the advertisement price
   */
  currencies?: Array<Currency>;

  /**
   * The possible editable advertisement custom fields
   */
  customFields?: Array<CustomFieldDetailed>;

  /**
   * The available delivery methods. Only for webshops.
   */
  deliveryMethods?: Array<DeliveryMethod>;

  /**
   * The advertisement kind this data is related to.
   */
  kind?: AdKind;

  /**
   * Indicates if user can select single or multiples categories per advertisement
   */
  maxCategoriesPerAd?: number;

  /**
   * Indicates the maximum amount of images the user can upload for an advertisement
   */
  maxImages?: number;

  /**
   * Use `user` instead.
   *
   *
   * The owner of the advertisement.
   *
   * @deprecated
   */
  owner?: User;

  /**
   * Indicates whether advertisements require an authorization from the administration in order to be published for other users to see
   */
  requiresAuthorization?: boolean;

  /**
   * The user which owns the advertisement
   */
  user?: User;
  webshopSettings?: WebshopSettings;
}
