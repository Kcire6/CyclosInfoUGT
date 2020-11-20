/* tslint:disable */
import { AdCategoryWithParent } from './ad-category-with-parent';
import { AdDetailed } from './ad-detailed';
import { AdQuestion } from './ad-question';
import { Address } from './address';
import { Currency } from './currency';
import { CustomFieldValue } from './custom-field-value';
import { DatePeriod } from './date-period';
import { DeliveryMethod } from './delivery-method';
import { ExportFormat } from './export-format';
import { Image } from './image';
import { Operation } from './operation';

/**
 * Detailed information when viewing an advertisement
 */
export interface AdView extends AdDetailed {

  /**
   * The custom addresses where this advertisement is available.
   */
  adAddresses?: Array<Address>;

  /**
   * Holds the images other than the primary image, which is returned in the `image` field
   */
  additionalImages?: Array<Image>;

  /**
   * if true then this webshop ad can be ordered specifying the quantity as a decimal number.
   */
  allowDecimal?: boolean;

  /**
   * Indicates if the authenticated user can authorize this advertisement (user managers only).
   */
  canApprove?: boolean;

  /**
   * Indicates if the authenticated user can ask questions about this advertisement.
   */
  canAsk?: boolean;

  /**
   * Indicates if the authenticated user can buy this webshop ad.
   */
  canBuy?: boolean;

  /**
   * Indicates if the authenticated user can edit this advertisement
   */
  canEdit?: boolean;

  /**
   * Indicates if the authenticated user can hide this advertisement.
   */
  canHide?: boolean;

  /**
   * Use `canEdit` or `canRemove` instead.
   *
   *
   * Indicates if the authenticated user manage this advertisement
   *
   * @deprecated
   */
  canManage?: boolean;

  /**
   * Indicates if the authenticated user can reject this advertisement (user managers only).
   */
  canReject?: boolean;

  /**
   * Indicates if the authenticated user can remove this advertisement. The owner of the ad with manage permissions can remove the advertisement regardless the ad status.
   */
  canRemove?: boolean;

  /**
   * Indicates if the authenticated user can request for authorization for this advertisement.
   */
  canRequestAuthorization?: boolean;

  /**
   * Indicates if the authenticated user can set as draft an already authorized (published) advertisement.
   */
  canSetAsDraft?: boolean;

  /**
   * Indicates if the authenticated user can unhide this advertisement.
   */
  canUnhide?: boolean;

  /**
   * Either internal name or id of categories this advertisement belongs to. In most cases an advertisement will have a single category, but this depends on the Cyclos configuration.
   */
  categories?: Array<AdCategoryWithParent>;
  currency?: Currency;

  /**
   * The list of custom field values this advertisement has
   */
  customValues?: Array<CustomFieldValue>;

  /**
   * The available delivery methods for this webshop ad.
   */
  deliveryMethods?: Array<DeliveryMethod>;

  /**
   * The formats which the advertisement can be exported
   */
  exportFormats?: Array<ExportFormat>;

  /**
   * Indicates whether show or not this advertisement owner to guests
   */
  hideOwner?: boolean;

  /**
   * Indicates whether show or not this advertisement price to guests
   */
  hidePrice?: boolean;

  /**
   * The last comments set by a manager when rejecting or set as draft this advertisement. Only send if the advertisement requires authorization and the authenticated user can view the comments.
   */
  lastAuthorizationComments?: string;

  /**
   * List of runnable custom operations.
   */
  operations?: Array<Operation>;

  /**
   * The promotional period, the one when `promotionalPrice` is valid
   */
  promotionalPeriod?: DatePeriod;

  /**
   * Indicates whether the promotional period is active at the moment this data is returned
   */
  promotionalPeriodActive?: boolean;

  /**
   * The list of questions this advertisement has.
   */
  questions?: Array<AdQuestion>;

  /**
   * Indicates if the questions are anabled for the given advertisement.
   */
  questionsEnabled?: boolean;

  /**
   * The addresses (belonging to the advertisement's owner) where this  advertisement is available.
   */
  userAddresses?: Array<Address>;
}
