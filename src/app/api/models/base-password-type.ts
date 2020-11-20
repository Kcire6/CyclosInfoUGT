/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';

/**
 * Contains base definitions for a password type
 */
export interface BasePasswordType extends InternalNamedEntity {

  /**
   * Indicates the maximum length of characters allowed for a password definition
   */
  maxLength?: number;

  /**
   * Indicates the minimum length of characters allowed for a password definition
   */
  minLength?: number;

  /**
   * Indicates whether this password type only allows numbers as possible characters
   */
  onlyNumeric?: boolean;
}
