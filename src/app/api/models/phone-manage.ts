/* tslint:disable */

/**
 * Common fields for either creating or editing a phone
 */
export interface PhoneManage {

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
   * Only applicable if this represents a mobile phone. Whether this mobile is verified. Can only be directly set by administrators. Regular users need to verify it.
   */
  verified?: boolean;
}
