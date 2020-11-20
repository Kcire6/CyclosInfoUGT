/* tslint:disable */
import { CustomFieldBinaryValues } from './custom-field-binary-values';
import { RecordBasicData } from './record-basic-data';
import { RecordEdit } from './record-edit';

/**
 * Contains data for editing an existing record
 */
export interface RecordDataForEdit extends RecordBasicData {

  /**
   * Holds the current values for file / image custom fields as lists of `StoredFile`s / `Image`s.
   */
  binaryValues?: CustomFieldBinaryValues;

  /**
   * Can the authenticated user edit records of this type?
   */
  canEdit?: boolean;

  /**
   * Can the authenticated user remove records of this type?
   */
  canRemove?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit records of this type?
   *
   * @deprecated
   */
  edit?: boolean;

  /**
   * The internal names of fields that can be edited
   */
  editableFields?: Array<string>;

  /**
   * The record that is being edited. This value can be modified and sent back to `PUT /records/{id}`
   */
  record?: RecordEdit;

  /**
   * Use `canRemove` instead.
   *
   *
   * Can the authenticated user remove records of this type?
   *
   * @deprecated
   */
  remove?: boolean;
}
