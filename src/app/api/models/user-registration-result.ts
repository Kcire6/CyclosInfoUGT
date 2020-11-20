/* tslint:disable */
import { EntityReference } from './entity-reference';
import { User } from './user';
import { UserRegistrationPrincipal } from './user-registration-principal';
import { UserRegistrationStatusEnum } from './user-registration-status-enum';

/**
 * Result of a user registration
 */
export interface UserRegistrationResult {

  /**
   * The types of passwords that were generated
   */
  generatedPasswords?: Array<EntityReference>;

  /**
   * Contains information about each user principal (identification) and the channels that can be accessed using it
   */
  principals?: Array<UserRegistrationPrincipal>;

  /**
   * The root URL that can be used to access the web interface
   */
  rootUrl?: string;
  status?: UserRegistrationStatusEnum;

  /**
   * The user that has just been registered
   */
  user?: User;
}
