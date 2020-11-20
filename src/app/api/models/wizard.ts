/* tslint:disable */
import { AdminMenuEnum } from './admin-menu-enum';
import { InternalNamedEntity } from './internal-named-entity';
import { UserMenuEnum } from './user-menu-enum';
import { UserProfileSectionEnum } from './user-profile-section-enum';
import { WizardKind } from './wizard-kind';

/**
 * A custom wizard
 */
export interface Wizard extends InternalNamedEntity {

  /**
   * In which administration menu the wizard shows up.
   */
  adminMenu?: AdminMenuEnum;

  /**
   * The character that represents the icon in the Cyclos font
   */
  icon?: string;
  kind?: WizardKind;

  /**
   * A representative label about the wizard
   */
  label?: string;

  /**
   * In which user menu the operation shows up.
   */
  userMenu?: UserMenuEnum;

  /**
   * In which user profile section the operation shows up.
   */
  userProfileSection?: UserProfileSectionEnum;
}
