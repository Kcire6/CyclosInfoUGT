/* tslint:disable */
import { EntityReference } from './entity-reference';
import { Image } from './image';

/**
 * Contains information for a given system image category, with its images.
 */
export interface SystemImageCategoryListData {

  /**
   * Does the authenticated admin has permission to create a new image in this category?
   */
  canCreate?: boolean;

  /**
   * Does the authenticated user has permission to edit images in this category?
   */
  canEdit?: boolean;
  category?: EntityReference;

  /**
   * The list of images in this category
   */
  images?: Array<Image>;
}
