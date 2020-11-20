/* tslint:disable */
import { DocumentKind } from './document-kind';
import { EntityReference } from './entity-reference';
import { NamedEntity } from './named-entity';
import { StoredFile } from './stored-file';

/**
 * Reference to a document
 */
export interface Document extends NamedEntity {

  /**
   * The document category. Only if `kind` is either `static` or `dynamic`.
   */
  category?: EntityReference;

  /**
   * The document description.
   */
  description?: string;

  /**
   * The document file description. Only if `kind` is either `static` or `user`.
   */
  file?: StoredFile;

  /**
   * The document kind
   */
  kind?: DocumentKind;
}
