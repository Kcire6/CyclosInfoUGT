/* tslint:disable */
import { AddressQueryFieldEnum } from './address-query-field-enum';
import { Agreement } from './agreement';
import { BasicProfileFieldInput } from './basic-profile-field-input';
import { CustomFieldDetailed } from './custom-field-detailed';
import { EntityReference } from './entity-reference';
import { ExportFormat } from './export-format';
import { Group } from './group';
import { SearchByDistanceData } from './search-by-distance-data';

/**
 * Contains basic data used to search users in distinct contexts
 */
export interface BaseUserDataForSearch {
  addressFieldsInSearch?: Array<AddressQueryFieldEnum>;

  /**
   * The list of agreements that can be used to filter users that have either accepted or not accepted specific agreements. Only returned for admins / brokers that can see the user agreement log.
   */
  agreements?: Array<Agreement>;

  /**
   * Indicates whether using keywords is allowed
   */
  allowKeywords?: boolean;

  /**
   * The list of basic profile fields that can be used either as search filters (if the internal names are present in the `fieldsInSearch` property) or on the result list (if the internal names are present in the `fieldsInList` property).
   */
  basicFields?: Array<BasicProfileFieldInput>;

  /**
   * The list of custom profile fields that can be used either as search filters (if the internal names are present in the `fieldsInSearch` property) or on the result list (if the internal names are present in the `fieldsInList` property)
   */
  customFields?: Array<CustomFieldDetailed>;

  /**
   * The formats which the search results can be exported.
   */
  exportFormats?: Array<ExportFormat>;

  /**
   * The internal names of either basic or custom profile fields which can be used as search filters (separated fields, not keywords).
   */
  fieldsInSearch?: Array<string>;

  /**
   * The groups the authenticated user can use to filter users. Admins can always filter by groups, while users depend on a permission, which can be to only view group sets, only groups or none.
   */
  groups?: Array<Group>;

  /**
   * The list of products which admins can use to filter users.
   */
  products?: Array<EntityReference>;
  searchByDistanceData?: SearchByDistanceData;
}
