/* tslint:disable */
import { Image } from './image';
import { ImageKind } from './image-kind';

/**
 * Details about an image
 */
export interface ImageView extends Image {

  /**
   * Indicates whether this was originally a PNG format that exceeded the maximum allowed size and was automatically converted to JPEG.
   */
  convertedToJpeg?: boolean;
  kind?: ImageKind;
}
