/* tslint:disable */
import { NamedEntity } from './named-entity';

/**
 * Defines the user's language and region
 */
export interface UserLocale extends NamedEntity {

  /**
   * Country code used to specify user's language
   */
  code?: string;
}
