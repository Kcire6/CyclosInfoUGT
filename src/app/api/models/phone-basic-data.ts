/* tslint:disable */
import { PasswordInput } from './password-input';
import { PhoneKind } from './phone-kind';
import { User } from './user';

/**
 * Contains data shared by both PhoneDataForNew and PhoneDataForEdit
 */
export interface PhoneBasicData {

  /**
   * Indicates the it is configured to always format numbers using the international format. If set to false, numbers will be formatted in the national format.
   */
  alwaysShowInternationalNumber?: boolean;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * The 2-letter country code used by default for numbers. Unless an international number is specified (using the `+` prefix), the phone number is assumed to belong to this country.
   */
  country?: string;

  /**
   * Indicates whether privacy can be used for this phone
   */
  enablePrivacy?: boolean;

  /**
   * An example phone number. Can be either a land-line or mobile phone number example, depending on this phone kind phone
   */
  example?: string;

  /**
   * Only returned for land line phones. Indicates whether the extension is enabled.
   */
  extensionEnabled?: boolean;

  /**
   * Can the authenticated user manage the privacy of this phone?
   */
  managePrivacy?: boolean;

  /**
   * Can the authenticated user manully verify a mobile phone?
   */
  manuallyVerify?: boolean;

  /**
   * Only returned for mobile phones. Indicates whether outbound SMS is enabled in Cyclos
   */
  smsEnabled?: boolean;
  type?: PhoneKind;

  /**
   * The user which owns the phone
   */
  user?: User;
}
