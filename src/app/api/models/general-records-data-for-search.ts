/* tslint:disable */
import { AddressQueryFieldEnum } from './address-query-field-enum';
import { BaseRecordDataForSearch } from './base-record-data-for-search';
import { BasicProfileFieldInput } from './basic-profile-field-input';
import { CustomFieldDetailed } from './custom-field-detailed';
import { GeneralRecordsQueryFilters } from './general-records-query-filters';
import { Group } from './group';

/**
 * Data for searching records of a type, from any user
 */
export interface GeneralRecordsDataForSearch extends BaseRecordDataForSearch {
  addressFieldsInSearch?: Array<AddressQueryFieldEnum>;

  /**
   * The list of basic user profile fields that can be used as search filters. Only returned if searching user records.
   */
  basicProfileFields?: Array<BasicProfileFieldInput>;

  /**
   * The list of custom user profile fields that can be used as search filters. Only returned if searching user records.
   */
  customProfileFields?: Array<CustomFieldDetailed>;

  /**
   * The groups the authenticated user can use to filter user records
   */
  groups?: Array<Group>;

  /**
   * Default query filters for searching records
   */
  query?: GeneralRecordsQueryFilters;
}
