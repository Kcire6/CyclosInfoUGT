/* tslint:disable */
import { Entity } from './entity';
import { IdentityProvider } from './identity-provider';
import { UserIdentityProviderStatusEnum } from './user-identity-provider-status-enum';

/**
 * A link between a user an an identity provider
 */
export interface UserIdentityProvider extends Entity {

  /**
   * The e-mail name of the user in the identity provider Only if `status` is `linked` and if the provider has disclosed the user's e-mail.
   */
  email?: string;
  identityProvider?: IdentityProvider;

  /**
   * The date the link was created. Only if `status` is `linked`.
   */
  linkDate?: string;

  /**
   * The display name of the user in the identity provider. Only if `status` is `linked`.
   */
  name?: string;
  status?: UserIdentityProviderStatusEnum;
}
