/* tslint:disable */
import { IdentityProvider } from './identity-provider';
import { IdentityProviderCallbackStatusEnum } from './identity-provider-callback-status-enum';
import { Image } from './image';
import { WizardExecutionData } from './wizard-execution-data';

/**
 * Result of a callback by an identity provider
 */
export interface IdentityProviderCallbackResult {

  /**
   * The user custom field values as returned by the provider. Only returned if `status` is `registrationData`.
   */
  customValues?: { [key: string]: string };

  /**
   * The user e-mail as returned by the provider. Only returned if `status` is `registrationData`.
   */
  email?: string;

  /**
   * Description for the error being returned. It is possible that no message is returned. In this case, a generic error message should be displayed for the user. Only returned if `status` is `error`.
   */
  errorMessage?: string;
  identityProvider?: IdentityProvider;

  /**
   * The user image as returned by the provider. Only returned if `status` is `registrationData`.
   */
  image?: Image;

  /**
   * The user land-line phone extension name as returned by the provider. Only returned if `status` is `registrationData`.
   */
  landLineExtension?: string;

  /**
   * The user land-line phone number name as returned by the provider. Only returned if `status` is `registrationData`.
   */
  landLinePhone?: string;

  /**
   * The user mobile phone number name as returned by the provider. Only returned if `status` is `registrationData`.
   */
  mobilePhone?: string;

  /**
   * The user display name as returned by the provider. Only returned if `status` is `registrationData`.
   */
  name?: string;

  /**
   * The identifier used to track this operation.
   */
  requestId?: string;

  /**
   * If the user was logged-in, this is the token identifying the session. Only returned if `status` is either: `loginLink`, `loginEmail` or `registrationDone`.
   */
  sessionToken?: string;
  status?: IdentityProviderCallbackStatusEnum;

  /**
   * The user login name as returned by the provider. Only returned if `status` is `registrationData`.
   */
  username?: string;

  /**
   * Only when the request is for a registration wizard. Contains the data for the next wizard step.
   */
  wizardExecutionData?: WizardExecutionData;
}
