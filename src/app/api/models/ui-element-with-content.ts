/* tslint:disable */
import { VersionedEntity } from './versioned-entity';

/**
 * Contains definitions for a UI element that has a content
 */
export interface UiElementWithContent extends VersionedEntity {

  /**
   * The content of this element
   */
  content?: string;
}
