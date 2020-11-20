/* tslint:disable */
import { CaptchaProviderEnum } from './captcha-provider-enum';
import { DeviceConfirmationView } from './device-confirmation-view';
import { EntityReference } from './entity-reference';
import { IdentityProvider } from './identity-provider';
import { PasswordInput } from './password-input';
import { PrincipalTypeInput } from './principal-type-input';
import { SendMediumEnum } from './send-medium-enum';

/**
 * Contains data useful for a login form, as well as forgot password
 */
export interface DataForLogin {

  /**
   * The password type used for login access
   */
  accessPasswordType?: EntityReference;

  /**
   * The internal name of the identification method that is marked as default for the current channel configuration. This is optional, and if there is no default, all possible identification methods will be attempted for login.
   */
  defaultPrincipalType?: string;

  /**
   * The pending device confirmation used to confirm a trusted session. Only returned if a trusted device identification was given when requesting the data and it exists and is active.
   */
  deviceConfirmation?: DeviceConfirmationView;

  /**
   * The additional identification methods also accepted for the forgotten password request.
   */
  extraForgotPasswordPrincipalTypes?: Array<PrincipalTypeInput>;

  /**
   * If the forgot password request requires a captcha, will be the provider used to request one. Otherwise will be null.
   */
  forgotPasswordCaptchaProvider?: CaptchaProviderEnum;

  /**
   * If the forgot password request is enabled, returns the mediums the user can choose to receive the confirmation key or code. If nothing is returned, forgot password is not enabled.
   */
  forgotPasswordMediums?: Array<SendMediumEnum>;

  /**
   * The identity providers available for login
   */
  identityProviders?: Array<IdentityProvider>;

  /**
   * Contains data for the password used on login
   */
  loginPasswordInput?: PasswordInput;

  /**
   * Whether the given pin, when requesting the data, can be used for login or not. Only if a `pinId` was given when requesting the data, and the `loginPasswordInput.pinAvailability` is not `disabled`.
   */
  pinActive?: boolean;

  /**
   * The identification methods accepted for login
   */
  principalTypes?: Array<PrincipalTypeInput>;
}
