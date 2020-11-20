/* tslint:disable */

/**
 * Contains configuration information related to phones
 */
export interface PhoneConfiguration {

  /**
   * Indicates the it is configured to always format numbers using the international format. If set to false, numbers will be formatted in the national format.
   */
  alwaysShowInternationalNumber?: boolean;

  /**
   * The 2-letter country code used by default for numbers. Unless an international number is specified (using the `+` prefix), the phone number is assumed to belong to this country.
   */
  country?: string;

  /**
   * Indicates whether the extension is enabled for land-line phones
   */
  extensionEnabled?: boolean;

  /**
   * An example phone number for a land-line phone
   */
  landLineExample?: string;

  /**
   * An example phone number for a mobile phone
   */
  mobileExample?: string;

  /**
   * Indicates whether outbound SMS is enabled in Cyclos
   */
  smsEnabled?: boolean;
}
