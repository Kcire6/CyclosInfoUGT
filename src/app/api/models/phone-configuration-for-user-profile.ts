/* tslint:disable */
import { AvailabilityEnum } from './availability-enum';
import { PhoneConfiguration } from './phone-configuration';
import { PhoneNew } from './phone-new';

/**
 * Contains extended phone configuration for a user profile
 */
export interface PhoneConfigurationForUserProfile extends PhoneConfiguration {

  /**
   * Can edit phones?
   */
  edit?: boolean;
  landLineAvailability?: AvailabilityEnum;

  /**
   * Contains a template the default values for a new land-line phone
   */
  landLinePhone?: PhoneNew;

  /**
   * Can manage the privacy of phones?
   */
  managePrivacy?: boolean;

  /**
   * The maximum number of land-line phones the user can own
   */
  maxLandLines?: number;

  /**
   * The maximum number of mobile phones the user can own
   */
  maxMobiles?: number;
  mobileAvailability?: AvailabilityEnum;

  /**
   * Contains a template with default values for a new mobile phone
   */
  mobilePhone?: PhoneNew;
}
