/* tslint:disable */
import { AdminMenuEnum } from './admin-menu-enum';
import { InternalNamedEntity } from './internal-named-entity';
import { RecordLayoutEnum } from './record-layout-enum';
import { UserMenuEnum } from './user-menu-enum';
import { UserProfileSectionEnum } from './user-profile-section-enum';

/**
 * Contains definitions for a record type
 */
export interface RecordType extends InternalNamedEntity {

  /**
   * In which administration menu the record type shows up. Only returned for system record types.
   */
  adminMenu?: AdminMenuEnum;
  layout?: RecordLayoutEnum;

  /**
   * The name for the plural form
   */
  pluralName?: string;

  /**
   * Whether the record type is set to use a separated view / edit page
   */
  useViewPage?: boolean;

  /**
   * In which user menu the record type shows up. Only returned for user record types.
   */
  userMenu?: UserMenuEnum;

  /**
   * In which user profile section the record type shows up. Only returned for user record types.
   */
  userProfileSection?: UserProfileSectionEnum;
}
