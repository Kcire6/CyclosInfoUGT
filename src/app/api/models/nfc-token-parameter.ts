/* tslint:disable */

/**
 * Definitions for parameters of actions over NFC tokens
 */
export interface NfcTokenParameter {

  /**
   * The token value. Is normally the internal tag idenfifier, encoded as hex
   */
  token?: string;

  /**
   * Either the identifier or internal name of fhe NFC token type
   */
  type?: string;
}
