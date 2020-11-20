/* tslint:disable */
import { AddressQueryFieldEnum } from './address-query-field-enum';
import { ContactListQueryFilters } from './contact-list-query-filters';
import { CustomFieldDetailed } from './custom-field-detailed';
import { User } from './user';

/**
 * Data for searching an user's contact list
 */
export interface ContactListDataForSearch {
  addressFieldsInSearch?: Array<AddressQueryFieldEnum>;

  /**
   * The list of contact custom fields that are either to be used as search filter (if its internal name is present on `fieldsInSearch`) and / or in the result list (if its internal name is present on `fieldsInList`)
   */
  customFields?: Array<CustomFieldDetailed>;

  /**
   * The internal names of the contact custom fields that will be returned together with each record, and should be shown in the result list
   */
  fieldsInList?: Array<string>;

  /**
   * The internal names of the contact custom fields that should be used as search filters (separated fields, not keywords)
   */
  fieldsInSearch?: Array<string>;

  /**
   * This flag can be used to know whether the contact should be added directly to the user's contact list or a page should be shown for the user to fill in the contact custom fields.
   */
  hasEditableFields?: boolean;

  /**
   * This flag can be used to know whether selecting a contact in the contact list should show direclty the user profile or a contact details page to show additional custom fields.
   */
  hasVisibleFields?: boolean;

  /**
   * Default query filters for searching records
   */
  query?: ContactListQueryFilters;
  user?: User;
}
