/* tslint:disable */
import { AvailabilityEnum } from './availability-enum';
import { Image } from './image';

/**
 * Contains information for a list of images, such as permissions and the list of images itself
 */
export interface ImagesListData {
  availability?: AvailabilityEnum;

  /**
   * Does the authenticated user has permission to create a new image?
   */
  canCreate?: boolean;

  /**
   * Does the authenticated user has permission to edit these images?
   */
  canEdit?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Does the authenticated user has permission to manage these images?
   *
   * @deprecated
   */
  canManage?: boolean;

  /**
   * The list of images
   */
  images?: Array<Image>;

  /**
   * The maximum number of images allowed
   */
  maxImages?: number;
}
