/* tslint:disable */
import { AdBasicData } from './ad-basic-data';
import { AdEdit } from './ad-edit';
import { AdStatusEnum } from './ad-status-enum';
import { CustomFieldBinaryValues } from './custom-field-binary-values';

/**
 * Contains data for editing a new advertisement
 */
export interface AdDataForEdit extends AdBasicData {

  /**
   * The advertisement that is being edited
   */
  advertisement?: AdEdit;

  /**
   * Holds the current values for file / image custom fields as lists of `StoredFile`s / `Image`s.
   */
  binaryValues?: CustomFieldBinaryValues;

  /**
   * Indicates whether the current ad can be edited by the currently authenticated used.
   */
  canEdit?: boolean;

  /**
   * Indicates whether the current ad can be removed by the currently authenticated used.
   */
  canRemove?: boolean;

  /**
   * The creation date the advertisement was created
   */
  creationDate?: string;

  /**
   * Use `canEdit` instead.
   *
   *
   * Indicates whether the current ad can be edited by the currently authenticated used.
   *
   * @deprecated
   */
  edit?: boolean;

  /**
   * Use `canRemove` instead.
   *
   *
   * Indicates whether the current ad can be removed by the currently authenticated used.
   *
   * @deprecated
   */
  remove?: boolean;
  status?: AdStatusEnum;
}
