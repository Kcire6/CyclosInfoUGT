/* tslint:disable */
import { SystemImageCategoryListData } from './system-image-category-list-data';

/**
 * Contains for each system image category
 */
export interface SystemImagesListData {

  /**
   * Contains each of the system image categories, together with their permissions and images.
   */
  categories?: Array<SystemImageCategoryListData>;
}
