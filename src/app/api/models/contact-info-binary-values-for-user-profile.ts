/* tslint:disable */
import { CustomFieldBinaryValues } from './custom-field-binary-values';
import { Image } from './image';

/**
 * Holds the current additional contact image and binary field values
 */
export interface ContactInfoBinaryValuesForUserProfile extends CustomFieldBinaryValues {
  image?: Image;
}
