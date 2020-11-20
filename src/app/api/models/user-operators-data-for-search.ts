/* tslint:disable */
import { BasicProfileFieldInput } from './basic-profile-field-input';
import { CustomFieldDetailed } from './custom-field-detailed';
import { EntityReference } from './entity-reference';
import { User } from './user';
import { UserOperatorsQueryFilters } from './user-operators-query-filters';
export interface UserOperatorsDataForSearch {

  /**
   * The basic profile fields in the result list
   */
  basicFields?: Array<BasicProfileFieldInput>;

  /**
   * Indicates whether the authenticated user can create more operators for the specified user.
   */
  canCreateNew?: boolean;

  /**
   * The custom profile fields in the result list
   */
  customFields?: Array<CustomFieldDetailed>;

  /**
   * The internal names of either basic or custom profile fields that are configured to be shown on the list. This actually defines the fields that will be loaded on the result. It is possible that no fields are configured to be returned on list. In this case, the result objects will have the 'display' property loaded with what is configured to be the user formatting field(s).
   */
  fieldsInList?: Array<string>;

  /**
   * The operator groups this user owns
   */
  groups?: Array<EntityReference>;

  /**
   * Default query filters to search a user's operators
   */
  query?: UserOperatorsQueryFilters;
  user?: User;
}
