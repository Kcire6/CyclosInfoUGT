/* tslint:disable */
import { EntityReference } from './entity-reference';
import { PasswordType } from './password-type';
import { Permissions } from './permissions';
import { RoleEnum } from './role-enum';
import { User } from './user';
import { VersionedEntity } from './versioned-entity';

/**
 * Contains relevant information for the authenticated user and his granted permissions.
 */
export interface BaseAuth {

  /**
   * Only returned when authenticated as access client, contains information about it
   */
  accessClient?: EntityReference;

  /**
   * Indicates whether this user is an operator which is an alias of his owner member, that is, has all member permissions, and is not restricted to an operator group. Only returned if `role` is `operator`.
   */
  aliasOperator?: boolean;

  /**
   * Returns whether the configuration for the current channel has device PIN enabled.
   */
  allowPin?: boolean;

  /**
   * Returns whether the current user has ever accepted any agreement. This is always false for operators, as operators themselves don't accept agreements. However, their owner members do.
   */
  everAcceptedAgreements?: boolean;

  /**
   * Returns whether the current access password is expired. If so, the user will have to change the password, or all other actions will be denied.
   */
  expiredPassword?: boolean;

  /**
   * Returns whether the current secondary access password is expired. If so, the user will have to change the password, or all other actions will be denied.
   */
  expiredSecondaryPassword?: boolean;

  /**
   * Indicates whether this user belongs to global mode. Only returned if there is an authenticated user.
   */
  global?: boolean;

  /**
   * The current language version
   */
  language?: VersionedEntity;

  /**
   * Returns a reference to the password type used on this channel.
   */
  passwordType?: PasswordType;

  /**
   * Returns whether the current user has some agreements pending accept. If so, a call to `GET /agreements/pending` should be performed to get the content of the pending agreements, and then a `POST /agreements/pending{id_or_internal_name}` to accept each agreement.
   */
  pendingAgreements?: boolean;

  /**
   * Returns whether the current session requires a secondary password. If so, the user will have to validate it using its secondary access password, otherwise, all other actions will be denied.
   */
  pendingSecondaryPassword?: boolean;

  /**
   * The granted permissions for the authenticated user or guest
   */
  permissions?: Permissions;

  /**
   * The principal (user identification) used on authentication. Can be the value of the login name, e-mail, account number, custom field or token used on authentication or at the moment of login. Is not returned when the authentication was performed via access client.
   */
  principal?: string;

  /**
   * Returns a reference to the principal type used for authentication. May be some of the built-in types (login name, e-mail, mobile phone or account number), a profile field, a token type or an access client type
   */
  principalType?: EntityReference;

  /**
   * The main user role. Only returned if there is an authenticated user.
   */
  role?: RoleEnum;

  /**
   * Returns a reference to the login confirmation password type used on this channel, if any.
   */
  secondaryPasswordType?: PasswordType;

  /**
   * A token that must be passed in on the Session-Token header on subsequent requests instead of the login name and password. Only returned if using a session authentication.
   */
  sessionToken?: string;

  /**
   * Indicates whether this user is a system administrator, that is, either belongs to the global system administrators group or to the network system administrators group. Only returned if `role` is `administrator`.
   */
  systemAdministrator?: boolean;

  /**
   * Whether the current session is a trusted one or not. If trusted then no confirmation password (if any) will be required for subsequent requests in the same session. Only returned if using a session authentication.
   */
  trustedSession?: boolean;

  /**
   * The authenticated user, if any.
   */
  user?: User;
}
