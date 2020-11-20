/* tslint:disable */
import { DocumentBasicData } from './document-basic-data';
import { DocumentNew } from './document-new';

/**
 * Fields for creating a new document
 */
export interface DocumentDataForNew extends DocumentBasicData {

  /**
   * The document that is being created. This value can be modified and sent back to either `POST /documents` (shared) or `POST /{user}/documents`.
   */
  document?: DocumentNew;
}
