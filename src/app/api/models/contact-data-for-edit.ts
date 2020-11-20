/* tslint:disable */
import { ContactBasicData } from './contact-basic-data';
import { ContactEdit } from './contact-edit';
import { CustomFieldBinaryValues } from './custom-field-binary-values';

/**
 * Contains data for editing an existing contact
 */
export interface ContactDataForEdit extends ContactBasicData {

  /**
   * Holds the current values for file / image custom fields as lists of `StoredFile`s / `Image`s.
   */
  binaryValues?: CustomFieldBinaryValues;

  /**
   * The contact that is being edited. This value can be modified and sent back to `PUT /contact/{id}`
   */
  contact?: ContactEdit;

  /**
   * The internal names of custom fields that can be edited
   */
  editableFields?: Array<string>;
}
