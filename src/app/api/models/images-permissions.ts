/* tslint:disable */
import { SystemImageCategoryPermissions } from './system-image-category-permissions';

/**
 * Permissions over images
 */
export interface ImagesPermissions {

  /**
   * Whether custom images are enabled for the logged user
   */
  myCustom?: boolean;

  /**
   * Visible system image categories.
   */
  systemCategories?: Array<SystemImageCategoryPermissions>;
}
