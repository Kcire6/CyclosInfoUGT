/* tslint:disable */
import { AvailabilityEnum } from './availability-enum';

/**
 * Permissions over a user profile
 */
export interface UserProfilePermissions {

  /**
   * The availability for addresses. Only if `manageAddresses` is true
   */
  addressAvailability?: AvailabilityEnum;

  /**
   * Will be true if the authenticated user can manage addresses and the user for which we are viewing its profile has not reached the maximum allowed addresses. Only if `manageAddresses` is true.
   */
  canCreateAddress?: boolean;

  /**
   * Will be true if the authenticated user can manage additional contact informations and the user for whom we are viewing its profile has not reached the maximum allowed additional contact informations. Only if `manageContactInfos` is true.
   */
  canCreateContactInfo?: boolean;

  /**
   * Will be true if the authenticated user can manage images and the user for whom we are viewing its profile has not reached the maximum allowed profile images. Only if `manageImages` is true.
   */
  canCreateImage?: boolean;

  /**
   * Will be true if the authenticated user can manage phones and the user for whom we are viewing its profile has not reached the maximum allowed landline phones. Only if `managePhones` is true.
   */
  canCreateLandLine?: boolean;

  /**
   * Will be true if the authenticated user can manage phones and the user for whom we are viewing its profile has not reached the maximum allowed mobile phones. Only if `managePhones` is true.
   */
  canCreateMobile?: boolean;

  /**
   * The availability for additional contacts Only if `manageContactInfos` is true
   */
  contactInfoAvailability?: AvailabilityEnum;

  /**
   * Can edit the user profile?
   */
  editProfile?: boolean;

  /**
   * The availability for land-line phones Only if `managePhones` is true
   */
  landLineAvailability?: AvailabilityEnum;

  /**
   * Can manage addresses?
   */
  manageAddresses?: boolean;

  /**
   * Can manage the addresses privacy?
   */
  manageAddressesPrivacy?: boolean;

  /**
   * Can manage additional contact informations?
   */
  manageContactInfos?: boolean;

  /**
   * Can manage profile images?
   */
  manageImages?: boolean;

  /**
   * Can manage phones?
   */
  managePhones?: boolean;

  /**
   * Can manage the phones privacy?
   */
  managePhonesPrivacy?: boolean;

  /**
   * The maximum number of addresses the user can own. Only if `manageAddresses` is true
   */
  maxAddresses?: number;

  /**
   * The maximum number of additional contacts the user can own.
   *  Only if `manageContactInfos` is true.
   */
  maxContactInfos?: number;

  /**
   * The maximum number of profile images  the user can own. Only if `manageImages` is true.
   */
  maxImages?: number;

  /**
   * The maximum number of land-line phones the user can own. Only if `managePhones` is true.
   */
  maxLandLines?: number;

  /**
   * The maximum number of mobile phones the user can own. Only if `managePhones` is true.
   */
  maxMobiles?: number;

  /**
   * The availability for mobile phones Only if `managePhones` is true
   */
  mobileAvailability?: AvailabilityEnum;

  /**
   * The availability for profile images Only if `manageImages` is true
   */
  profileImageAvailability?: AvailabilityEnum;
}
