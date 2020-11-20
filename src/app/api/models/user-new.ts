/* tslint:disable */
import { AddressNew } from './address-new';
import { CaptchaResponse } from './captcha-response';
import { ContactInfoNew } from './contact-info-new';
import { NfcTokenWithChallengeParameter } from './nfc-token-with-challenge-parameter';
import { PasswordRegistration } from './password-registration';
import { PhoneNew } from './phone-new';
import { UserManage } from './user-manage';

/**
 * Contains data used to register a user. All basic profile fields (full name, login name, e-mail, phones, addresses and image) can be enabled or disabled on Cyclos, via products. Also, the available custom fields and whether they can be hidden depend on the products the selected group has.
 */
export interface UserNew extends UserManage {

  /**
   * When there are agreements that need to be accepted for registration, either this property should be set to `true`, indicating that all agreements are accepted, or the `accepteAgreements` array must be set indicating which ones are agreed.
   */
  acceptAgreement?: boolean;

  /**
   * Either ids or internal names of agreements to accept. When there are agreements, either the `accepteAgreement` flag should be sent, indicating that all agreements are accepted, or this array should be sent indicating which agreements are accepted. All required agreements must be sent, or a validation error is returned. Optional agreements can be sent or not.
   */
  acceptAgreements?: Array<string>;

  /**
   * Addresses to be registered together with the user
   */
  addresses?: Array<AddressNew>;

  /**
   * Flag required only when the authenticated user is a broker, in that case we need to distingish between registering as member or broker. If true then the new user will be registered without a brokering relationship. Otherwise the authenticated user will be set as the broker of the new user.
   */
  asMember?: boolean;

  /**
   * Either the identifier or other identification value (login name, e-mail, etc) of the broker for the new user. Only allowed if logged-in as administrator with permission.
   */
  broker?: string;

  /**
   * The captcha response is required on public registrations, and ignored when administrators / brokers register another user.
   */
  captcha?: CaptchaResponse;

  /**
   * Additional contacts to be registered together with the user
   */
  contactInfos?: Array<ContactInfoNew>;

  /**
   * The initial user group
   */
  group?: string;

  /**
   * When using an [external identity provider](https://wiki4.cyclos.org/index.php/External_identity_providers), this is the request id used to complete the registration process after filling up the registration form.
   */
  identityProviderRequestId?: string;

  /**
   * The ids of previously uploaded user temporary images to be initially used as profile images
   */
  images?: Array<string>;

  /**
   * Land-line phones to be registered together with the user
   */
  landLinePhones?: Array<PhoneNew>;

  /**
   * Mobile phones to be registered together with the user
   */
  mobilePhones?: Array<PhoneNew>;

  /**
   * If not null then the given NFC token parameters will be used to personalize a tag for the user.
   */
  nfcToken?: NfcTokenWithChallengeParameter;

  /**
   * The initial passwords of the user
   */
  passwords?: Array<PasswordRegistration>;

  /**
   * If a `securityQuestion` is informed, this is the answer. Required in this case. Only used in public registration.
   */
  securityAnswer?: string;

  /**
   * If the server is configured to use security question, is the `internalName` of the question present in the result of `data-for-new`, in the `securityQuestions` property. Is optional and only used in public registration.
   */
  securityQuestion?: string;

  /**
   * When set to true, the activation e-mail is not sent to the registered user. Can only be used when an administrator / broker is registering a user, and ignored on public registrations (the e-mail is always sent on public registrations).
   */
  skipActivationEmail?: boolean;
}
