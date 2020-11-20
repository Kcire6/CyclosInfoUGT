/* tslint:disable */
import { AvailabilityEnum } from './availability-enum';

/**
 * User images data sent when editing the full profile
 */
export interface ImageConfigurationForUserProfile {
  availability?: AvailabilityEnum;

  /**
   * Can the authenticated user has permission to manage images?
   */
  manage?: boolean;

  /**
   * The maximum allowed number of profile images
   */
  maxImages?: number;
}
