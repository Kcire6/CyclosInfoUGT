/* tslint:disable */
import { Auth } from './auth';
import { IdentityProviderNotLinkReasonEnum } from './identity-provider-not-link-reason-enum';

/**
 * Contains information for the recently logged in user
 */
export interface LoginAuth extends Auth {
  identityProviderNotLinkReason?: IdentityProviderNotLinkReasonEnum;

  /**
   * A token (challenge) generated only if the login was not performed using a device pin. It can be used to confirm the pin creation operation. Is has a validity of 6 minutes after the session was created. After that time the pin creation can be confirmed only using the current login password.
   */
  pinCreationToken?: string;
}
