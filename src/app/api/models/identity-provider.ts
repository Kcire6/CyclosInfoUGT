/* tslint:disable */
import { Image } from './image';
import { InternalNamedEntity } from './internal-named-entity';

/**
 * A reference to an identity provider
 */
export interface IdentityProvider extends InternalNamedEntity {

  /**
   * The background color for the button that represents this provider
   */
  backgroundColor?: string;

  /**
   * The border color for the button that represents this provider
   */
  borderColor?: string;

  /**
   * The provider image
   */
  image?: Image;

  /**
   * The text color for the button that represents this provider
   */
  textColor?: string;
}
