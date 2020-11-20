/* tslint:disable */
import { TokenNew } from './token-new';
import { TokenType } from './token-type';
import { User } from './user';

/**
 * Configuration data to create a new token
 */
export interface TokenDataForNew {

  /**
   * The object that should be modified and posted back.
   */
  token?: TokenNew;
  type?: TokenType;

  /**
   * The user details, in case a user was requested.
   */
  user?: User;
}
