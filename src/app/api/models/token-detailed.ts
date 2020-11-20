/* tslint:disable */
import { TokenResult } from './token-result';
import { TokenType } from './token-type';

/**
 * Contains detailed information of a token.
 */
export interface TokenDetailed extends TokenResult {
  type?: TokenType;
}
