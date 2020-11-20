/* tslint:disable */
import { StoredFile } from './stored-file';

/**
 * Contains data for displaying an image
 */
export interface Image extends StoredFile {

  /**
   * The image height, in pixels
   */
  height?: number;

  /**
   * The image width, in pixels
   */
  width?: number;
}
