/* tslint:disable */
import { PhoneResult } from './phone-result';
import { User } from './user';

/**
 * Detailed information when viewing a phone
 */
export interface PhoneView extends PhoneResult {

  /**
   * Can the authenticated user edit / remove this phone?
   */
  canEdit?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit / remove this phone?
   *
   * @deprecated
   */
  editable?: boolean;

  /**
   * Indicates whether phone privacy can be used for this user
   */
  enablePrivacy?: boolean;

  /**
   * Only applicable if this represents a mobile phone. Whether this mobile phone is enabled for SMS, both receiving notifications and sending SMS operations. Can only be set if the mobile phone is verified.
   */
  enabledForSms?: boolean;

  /**
   * The number extension, only for landLine phones, and is only used if the phone configuration states that extensions are enabled.
   */
  extension?: string;

  /**
   * Indicates whether this phone is private / hidden for other users (`true`) or public / visible to all users (`false`).
   */
  hidden?: boolean;

  /**
   * The phone name
   */
  name?: string;

  /**
   * The formatted number
   */
  number?: string;

  /**
   * The user which owns this phone
   */
  user?: User;

  /**
   * Only applicable if this represents a mobile phone. Whether this mobile is verified. Can only be directly set by administrators. Regular users need to verify it.
   */
  verified?: boolean;
}
