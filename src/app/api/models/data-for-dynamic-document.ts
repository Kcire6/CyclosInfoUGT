/* tslint:disable */
import { CustomFieldDetailed } from './custom-field-detailed';
import { Document } from './document';
import { User } from './user';

/**
 * Contains the data for processing a dynamic document for a given user
 */
export interface DataForDynamicDocument {

  /**
   * The document which is being processed
   */
  document?: Document;

  /**
   * The document form fields to be filled in
   */
  formFields?: Array<CustomFieldDetailed>;

  /**
   * The user for which the document is being processed
   */
  user?: User;
}
