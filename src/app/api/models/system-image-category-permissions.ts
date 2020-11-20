/* tslint:disable */
import { EntityReference } from './entity-reference';

/**
 * Permissions over categories of system custom images
 */
export interface SystemImageCategoryPermissions {

  /**
   * Whether the logged user can edit images in this category
   */
  canEdit?: boolean;
  category?: EntityReference;
}
