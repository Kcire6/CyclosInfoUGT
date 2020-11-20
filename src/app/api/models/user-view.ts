/* tslint:disable */
import { AddressView } from './address-view';
import { BrokerView } from './broker-view';
import { ContactInfoDetailed } from './contact-info-detailed';
import { ContactView } from './contact-view';
import { EntityReference } from './entity-reference';
import { Image } from './image';
import { PhoneView } from './phone-view';
import { RoleEnum } from './role-enum';
import { User } from './user';
import { UserCustomFieldValue } from './user-custom-field-value';
import { UserPermissions } from './user-permissions';
import { UserReferences } from './user-references';
import { UserRelationshipEnum } from './user-relationship-enum';
import { UserStatusEnum } from './user-status-enum';

/**
 * Represents a user with all data for viewing the profile
 */
export interface UserView extends User {

  /**
   * The date the user was made active the first time. Only returned if the logged user manages the given used.
   */
  activationDate?: string;

  /**
   * Holds the images other than the primary image, which is returned in the `image` field
   */
  additionalImages?: Array<Image>;

  /**
   * Visible addresses
   */
  addresses?: Array<AddressView>;

  /**
   * Visible brokers
   */
  brokers?: Array<BrokerView>;

  /**
   * When this user is in the contact list of the currently logged user, returns data about the contact relation. When not returned, this user is no in the logged user's contact list.
   */
  contact?: ContactView;

  /**
   * Visible additional contact information
   */
  contactInfos?: Array<ContactInfoDetailed>;

  /**
   * The list of custom field values this user has
   */
  customValues?: Array<UserCustomFieldValue>;

  /**
   * The user's e-mail
   */
  email?: string;

  /**
   * Returned for managers / own user when the user has changed his e-mail but hasn't yet validated the new e-mail. The e-mail change validation is a configuration in Cyclos.
   */
  emailPendingValidation?: string;

  /**
   * The internal names of profile fields enabled for this user. For example, the user might have no phones, but it might be because he is not allowed to have phones or because there are currently no phones. Same for addresses, images and optional profile fields.
   */
  enabledProfileFields?: Array<string>;

  /**
   * The first time the user logged in, or null if never logged in. Only returned if the logged user manages the given used.
   */
  firstLogin?: string;

  /**
   * Reference to the user group. Is only returned if the authenticated user has permission to see groups.
   */
  group?: EntityReference;

  /**
   * Reference to the user group set. Is only returned if the authenticated user has permission to see group sets and the user group is in a group set.
   */
  groupSet?: EntityReference;

  /**
   * The last time the user logged in, or null if never logged in. Only returned if the logged user manages the given used.
   */
  lastLogin?: string;

  /**
   * The user's full name
   */
  name?: string;

  /**
   * The label used for the name of users
   */
  nameLabel?: string;

  /**
   * Indicates whether the given user is logged-in to the system. Only returned if the logged user manages the given used.
   */
  online?: boolean;

  /**
   * Permissions the authenticated has over this user
   */
  permissions?: UserPermissions;

  /**
   * Visible phones
   */
  phones?: Array<PhoneView>;

  /**
   * User general reference activities like score and total count.
   */
  references?: UserReferences;

  /**
   * The date the user was registered. Only returned if the logged user manages the given used.
   */
  registrationDate?: string;
  relationship?: UserRelationshipEnum;
  role?: RoleEnum;

  /**
   * The user status. Only returned if the authenticated user has permission to view the user status.
   */
  status?: UserStatusEnum;

  /**
   * The user's login name
   */
  username?: string;
}
