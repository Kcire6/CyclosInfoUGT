/* tslint:disable */
import { InternalNamedEntity } from './internal-named-entity';
import { PhysicalTokenTypeEnum } from './physical-token-type-enum';

/**
 * A reference to a token type
 */
export interface TokenType extends InternalNamedEntity {

  /**
   * In case the token value is entered by users or formatted, this is the (optional) mask to be used.
   */
  mask?: string;
  physicalType?: PhysicalTokenTypeEnum;

  /**
   * The name for the plural form
   */
  pluralName?: string;
}
