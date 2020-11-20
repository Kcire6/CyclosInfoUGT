/* tslint:disable */
import { Token } from './token';
import { User } from './user';

/**
 * Result of a general token search
 */
export interface TokenResult extends Token {

  /**
   * The assigned user. Only if status is not `unassigned`.
   */
  user?: User;
}
