/* tslint:disable */
import { AvailabilityEnum } from './availability-enum';
import { PhoneResult } from './phone-result';
import { User } from './user';

/**
 * Contains information for a list of phones
 */
export interface UserPhonesListData {

  /**
   * Can the authenticated user create new land-line phones for this user?
   */
  canCreateLandLine?: boolean;

  /**
   * Can the authenticated user create new mobile phones for this user?
   */
  canCreateMobile?: boolean;

  /**
   * Can the authenticated user edit phones of this user?
   */
  canEdit?: boolean;

  /**
   * Can the authenticated user enable / disable mobile phones of this user to send / receive SMS?
   */
  canEnableForSms?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user manage phones of this user?
   *
   * @deprecated
   */
  canManage?: boolean;

  /**
   * Can the authenticated user verify mobile phones of this user?
   */
  canVerify?: boolean;

  /**
   * Indicates whether phone privacy can be used for this user
   */
  enablePrivacy?: boolean;
  landLineAvailability?: AvailabilityEnum;

  /**
   * Indicates the maximum number of land line (fixed) phones this user can have. Is only returned when `canManage` is `true`.
   */
  maxLandLinePhones?: number;

  /**
   * Indicates the maximum number of mobile phones this user can have. Is only returned when `canManage` is `true`.
   */
  maxMobilePhones?: number;
  mobileAvailability?: AvailabilityEnum;

  /**
   * The list of (visible) phones
   */
  phones?: Array<PhoneResult>;

  /**
   * Indicates whether outbound SMS is enabled in Cyclos
   */
  smsEnabled?: boolean;

  /**
   * The user which owns this phones
   */
  user?: User;
}
