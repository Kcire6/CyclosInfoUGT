/* tslint:disable */
import { EntityReference } from './entity-reference';

/**
 * Permissions over a specific nfc token
 */
export interface NfcTokenPermissions {

  /**
   * Can initialize tokens of this type?
   */
  initialize?: boolean;

  /**
   * Can personalize tokens of this type?
   */
  personalize?: boolean;

  /**
   * Can personalize tokens of this type as member? Always `false` if the authenticated user is a not a broker.
   */
  personalizeAsMember?: boolean;

  /**
   * The token type
   */
  type?: EntityReference;
}
