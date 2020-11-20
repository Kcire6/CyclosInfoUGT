/* tslint:disable */
import { DocumentBasicData } from './document-basic-data';
import { DocumentEdit } from './document-edit';
import { StoredFile } from './stored-file';

/**
 * Fields for editing a document
 */
export interface DocumentDataForEdit extends DocumentBasicData {

  /**
   * The document that is being edited. This value can be modified and sent back to `PUT /documents/{id}`.
   */
  document?: DocumentEdit;

  /**
   * The current document file
   */
  file?: StoredFile;
}
