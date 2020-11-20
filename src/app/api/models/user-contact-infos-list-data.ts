/* tslint:disable */
import { AvailabilityEnum } from './availability-enum';
import { ContactInfoResult } from './contact-info-result';
import { CustomFieldDetailed } from './custom-field-detailed';
import { User } from './user';

/**
 * Contains, besides the user's additional contact informations, data for managing them
 */
export interface UserContactInfosListData {
  availability?: AvailabilityEnum;

  /**
   * Indicates whether new additional contact informations can be created by the authenticated user
   */
  canCreate?: boolean;

  /**
   * Indicates whether the additional contact informations can be edited by the authenticated user
   */
  canEdit?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Indicates whether the additional contact informations can be managed by the authenticated user
   *
   * @deprecated
   */
  canManage?: boolean;

  /**
   * The additional contact information list
   */
  contactInfos?: Array<ContactInfoResult>;

  /**
   * The list of additional contact informations custom fields
   */
  customFields?: Array<CustomFieldDetailed>;

  /**
   * Indicates the maximum number of additional contact informations the user can have
   */
  maxContactInfos?: number;

  /**
   * The user which owns this contacts
   */
  user?: User;
}
