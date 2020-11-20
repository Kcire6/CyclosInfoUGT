/* tslint:disable */
import { IdentityProvider } from './identity-provider';

/**
 * Result of the preparation of an operation with an identity provider
 */
export interface IdentityProviderRequestResult {
  identityProvider?: IdentityProvider;

  /**
   * The identifier used to track this operation
   */
  requestId?: string;

  /**
   * The URL which should be opened in a new browser window / popup to get the user consent.
   */
  url?: string;
}
