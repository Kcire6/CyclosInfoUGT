/* tslint:disable */
import { Image } from './image';
import { StoredFile } from './stored-file';

/**
 * Holds the values for uploaded files / images which are used as custom field values
 */
export interface CustomFieldBinaryValues {

  /**
   * The values for custom fields of type `file`
   */
  fileValues?: { [key: string]: Array<StoredFile> };

  /**
   * The values for custom fields of type `image`
   */
  imageValues?: { [key: string]: Array<Image> };
}
