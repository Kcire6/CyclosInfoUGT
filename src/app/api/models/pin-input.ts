/* tslint:disable */

/**
 * Contains all information for a PIN entry. PINs are always numeric.
 */
export interface PinInput {

  /**
   * The maximum allowed PIN length
   */
  maxLength?: number;

  /**
   * The minimum allowed PIN length
   */
  minLength?: number;
}
