/* tslint:disable */
import { AgreementsPermissions } from './agreements-permissions';
import { AlertsPermissions } from './alerts-permissions';
import { BankingPermissions } from './banking-permissions';
import { ContactsPermissions } from './contacts-permissions';
import { DocumentsPermissions } from './documents-permissions';
import { IdentityProvidersPermissions } from './identity-providers-permissions';
import { ImagesPermissions } from './images-permissions';
import { MarketplacePermissions } from './marketplace-permissions';
import { NotificationSettingsPermissions } from './notification-settings-permissions';
import { NotificationsPermissions } from './notifications-permissions';
import { OperationsPermissions } from './operations-permissions';
import { OperatorsPermissions } from './operators-permissions';
import { PasswordsPermissions } from './passwords-permissions';
import { PrivacySettingsPermissions } from './privacy-settings-permissions';
import { RecordsPermissions } from './records-permissions';
import { ReferencesPermissions } from './references-permissions';
import { SessionsPermissions } from './sessions-permissions';
import { TokensPermissions } from './tokens-permissions';
import { UserProfilePermissions } from './user-profile-permissions';
import { UsersPermissions } from './users-permissions';
import { VouchersPermissions } from './vouchers-permissions';
import { WizardsPermissions } from './wizards-permissions';

/**
 * Contains all permissions and configurations a user or guest can perform in the REST API
 */
export interface Permissions {

  /**
   * Permissions over own agreements
   */
  agreements?: AgreementsPermissions;

  /**
   * Permissions related to user alers
   */
  alerts?: AlertsPermissions;

  /**
   * Permissions over banking / accounts
   */
  banking?: BankingPermissions;

  /**
   * Permissions over contacts
   */
  contacts?: ContactsPermissions;

  /**
   * Permissions over documents
   */
  documents?: DocumentsPermissions;

  /**
   * Permissions over identity provider links
   */
  identityProviders?: IdentityProvidersPermissions;

  /**
   * Permissions over images (others than the profile image)
   */
  images?: ImagesPermissions;

  /**
   * Permissions for marketplace
   */
  marketplace?: MarketplacePermissions;

  /**
   * Permissions over own profile
   */
  myProfile?: UserProfilePermissions;

  /**
   * Permissions over notifications settings
   */
  notificationSettings?: NotificationSettingsPermissions;

  /**
   * Permissions over notifications
   */
  notifications?: NotificationsPermissions;

  /**
   * Permissions over own custom operations
   */
  operations?: OperationsPermissions;

  /**
   * Permissions over own operators
   */
  operators?: OperatorsPermissions;

  /**
   * Permissions over own passwords
   */
  passwords?: PasswordsPermissions;

  /**
   * Permissions over own privacy settings
   */
  privacySettings?: PrivacySettingsPermissions;

  /**
   * Permissions over own records
   */
  records?: RecordsPermissions;

  /**
   * Permissions over general references
   */
  references?: ReferencesPermissions;

  /**
   * Permissions over user sessions
   */
  sessions?: SessionsPermissions;

  /**
   * Permissions over tokens
   */
  tokens?: TokensPermissions;

  /**
   * Permissions over other users
   */
  users?: UsersPermissions;

  /**
   * Permissions over vouchers
   */
  vouchers?: VouchersPermissions;

  /**
   * Permissions over own custom wizards
   */
  wizards?: WizardsPermissions;
}
