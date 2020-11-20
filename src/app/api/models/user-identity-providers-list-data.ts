/* tslint:disable */
import { User } from './user';
import { UserIdentityProvider } from './user-identity-provider';

/**
 * Contains, besides the user's identity provider links, additional data for its management
 */
export interface UserIdentityProvidersListData {

  /**
   * Indicates whether existing links can be edited
   */
  canEdit?: boolean;

  /**
   * Indicates whether a new identity provider can be linked to the user
   */
  canLink?: boolean;

  /**
   * The identity provider links
   */
  identityProviders?: Array<UserIdentityProvider>;
  user?: User;
}
