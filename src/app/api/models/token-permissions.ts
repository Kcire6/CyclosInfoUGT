/* tslint:disable */
import { TokenType } from './token-type';

/**
 * Permissions over tokens of a specific type
 */
export interface TokenPermissions {

  /**
   * Can activate tokens of this type? For NFC tags, this permission is mapped to the 'Personalize' action.
   */
  activate?: boolean;

  /**
   * Can create tokens of this type? For NFC tags, this permission is mapped to the 'Initialize' action.
   */
  create?: boolean;
  type?: TokenType;
}
