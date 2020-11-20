/* tslint:disable */
import { TokenPermissions } from './token-permissions';
import { TokenResult } from './token-result';
import { User } from './user';

/**
 * Data for tokens of a specific type and user
 */
export interface UserTokensListData extends TokenPermissions {

  /**
   * The tokens for this type and user.
   */
  tokens?: Array<TokenResult>;
  user?: User;
}
