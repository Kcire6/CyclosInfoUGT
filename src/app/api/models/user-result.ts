/* tslint:disable */
import { Address } from './address';
import { EntityReference } from './entity-reference';
import { User } from './user';

/**
 * Data returned from user search
 */
export interface UserResult extends User {

  /**
   * First account number, used when account number is marked on products to be returned on user list
   */
  accountNumber?: string;

  /**
   * Address to be placed on map. Is only returned when the search result type is `map`.
   */
  address?: Address;

  /**
   * Holds the values for custom fields, keyed by field internal name or id. The format of the value depends on the custom field type. Example: `{..., "customValues": {"gender": "male", "birthDate": "1980-10-27"}}`
   */
  customValues?: { [key: string]: string };

  /**
   * Only returned when there is a base location to calculate the distance from. The unit (kilometers or miles) depends on configuration.
   */
  distance?: number;

  /**
   * The user's e-mail
   */
  email?: string;

  /**
   * The user group. Only returned when the `includeGroup` parameter is set to `true` and the current user can see other users' groups.
   */
  group?: EntityReference;

  /**
   * The user group. Only returned when the `includeGroupSet` parameter is set to `true` and the current user can see other users' group set.
   */
  groupSet?: EntityReference;

  /**
   * The user's full name
   */
  name?: string;

  /**
   * First phone number, used when phone is marked on products to be returned on user list
   */
  phone?: string;

  /**
   * The user's login name
   */
  username?: string;
}
