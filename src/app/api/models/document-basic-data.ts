/* tslint:disable */
import { DocumentKind } from './document-kind';
import { EntityReference } from './entity-reference';
import { User } from './user';

/**
 * Contains data shared by both DocumentDataForNew and DocumentDataForEdit
 */
export interface DocumentBasicData {

  /**
   * The possible document categories. Only returned if `kind` is `static`.
   */
  categories?: Array<EntityReference>;
  kind?: DocumentKind;

  /**
   * The document owner user. Only returned if `kind` is `user`.
   */
  user?: User;
}
