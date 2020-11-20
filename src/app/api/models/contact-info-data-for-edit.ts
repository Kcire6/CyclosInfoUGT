/* tslint:disable */
import { ContactInfoBasicData } from './contact-info-basic-data';
import { ContactInfoEdit } from './contact-info-edit';
import { CustomFieldBinaryValues } from './custom-field-binary-values';
import { Image } from './image';

/**
 * Contains data for editing an existing additional contact information
 */
export interface ContactInfoDataForEdit extends ContactInfoBasicData {

  /**
   * Holds the current values for file / image custom fields as lists of `StoredFile`s / `Image`s.
   */
  binaryValues?: CustomFieldBinaryValues;

  /**
   * Indicates whether the current contact info can be edited by the currently authenticated used.
   */
  canEdit?: boolean;

  /**
   * Indicates whether the current contact info can be removed by the currently authenticated used.
   */
  canRemove?: boolean;

  /**
   * The additional contact information that is being edited. This value can be modified and sent back on `PUT /contactInfos/{id}`.
   */
  contactInfo?: ContactInfoEdit;

  /**
   * Use `canEdit` instead.
   *
   *
   * Indicates whether the current contact info can be edited by the currently authenticated used.
   *
   * @deprecated
   */
  edit?: boolean;
  image?: Image;

  /**
   * Use `canRemove` instead.
   *
   *
   * Indicates whether the current contact info can be removed by the currently authenticated used.
   *
   * @deprecated
   */
  remove?: boolean;
}
