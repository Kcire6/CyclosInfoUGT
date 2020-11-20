/* tslint:disable */
import { AvailabilityEnum } from './availability-enum';
import { ContactInfoNew } from './contact-info-new';
import { CustomFieldDetailed } from './custom-field-detailed';

/**
 * User additional contacts data sent when editing the full profile
 */
export interface ContactInfoConfigurationForUserProfile {
  availability?: AvailabilityEnum;

  /**
   * Contains the default values for a new additional contact
   */
  contactInfo?: ContactInfoNew;

  /**
   * The custom fields for additional contact informations
   */
  customFields?: Array<CustomFieldDetailed>;

  /**
   * Can the authenticated user edit additional contacts?
   */
  edit?: boolean;

  /**
   * Can the authenticated user manage the privacy of additional contacts?
   */
  managePrivacy?: boolean;

  /**
   * The maximum number of additional contacts the user can own
   */
  maxContactInfos?: number;
}
