/* tslint:disable */
import { BasicUserQueryFilters } from './basic-user-query-filters';
import { RoleEnum } from './role-enum';
import { UserOrderByEnum } from './user-order-by-enum';

/**
 * Parameters for searching users
 */
export interface UserQueryFilters extends BasicUserQueryFilters {

  /**
   * Indicates the (managed) user to exclude contacts when `excludecontacts` is set. Defaults to the logged user.
   */
  contactsOwner?: string;

  /**
   * When set to `true` will not return any user that is already a contact of the user indicated on `contactsOwner` (the logged user if not set).
   */
  excludeContacts?: boolean;

  /**
   * When set to true the search will be restricted to those groups defined for the user search menu, if false then for those defined in the 'Search users on groups' product setting (or in the configuration in case of guests).
   */
  fromMenu?: boolean;

  /**
   * When set to `true`, instead of returning users with corresponding profile fields set on list, will return them with `display` and `shortDisplay`.
   */
  ignoreProfileFieldsInList?: boolean;
  orderBy?: UserOrderByEnum;
  roles?: Array<RoleEnum>;
}
