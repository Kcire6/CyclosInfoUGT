/* tslint:disable */
import { ContactInfoEdit } from './contact-info-edit';

/**
 * Parameters for editing an existing additional contact
 */
export interface ContactInfoEditWithId extends ContactInfoEdit {

  /**
   * The internal entity identifier
   */
  id?: string;
}
