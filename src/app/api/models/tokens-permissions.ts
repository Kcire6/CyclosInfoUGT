/* tslint:disable */
import { NfcTokenPermissions } from './nfc-token-permissions';
import { TokenPermissions } from './token-permissions';
import { TokenType } from './token-type';

/**
 * Permissions over tokens
 */
export interface TokensPermissions {

  /**
   * Permissions over my own tokens type
   */
  my?: Array<TokenPermissions>;

  /**
   * Use either `my`, `user` or `personalizeNfcTokensAsMember`, filtering by `physicalType` to be `nfcTag`.
   *
   *
   * Permissions over each visible nfc token type
   *
   * @deprecated
   */
  nfc?: Array<NfcTokenPermissions>;

  /**
   * NFC token types the authenticated member can personalize to other members (example, a business personalizing cards for clients).
   */
  personalizeNfcTokensAsMember?: Array<TokenType>;

  /**
   * Permissions over tokens types of other users
   */
  user?: Array<TokenPermissions>;
}
