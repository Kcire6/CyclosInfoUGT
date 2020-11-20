/* tslint:disable */
import { Entity } from './entity';
import { TokenStatusEnum } from './token-status-enum';

/**
 * Contains reference to a token. Tokens are used to identify users, and are normally used as cards.
 */
export interface Token extends Entity {

  /**
   * When the owner user activated the token.
   */
  activationDate?: string;

  /**
   * The creation date.
   */
  creationDate?: string;

  /**
   * The expiration date. Only if the corresponding token type defines an expiration period.
   */
  expiryDate?: string;
  status?: TokenStatusEnum;

  /**
   * The token value only if not NFC. Otherwise is the token label.
   */
  value?: string;
}
