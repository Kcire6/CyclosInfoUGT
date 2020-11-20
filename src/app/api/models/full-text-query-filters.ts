/* tslint:disable */
import { QueryFilters } from './query-filters';

/**
 * Base definitions for search filters which have keywords and user profile fields
 */
export interface FullTextQueryFilters extends QueryFilters {

  /**
   * Textual search keywords. Sometimes, like in user search, the fields matched depends on what is configured on the products.
   */
  keywords?: string;

  /**
   * User profile fields, both basic (full name, login name, phone, e-mail, etc) and custom fields, that are used for search. Is a comma-separated array, where each part consists in two parts: the internal name (or custom field id) of the field, and a value, both separated by `:` (colon). For example, `profileFields=field1:value1,field2:value2`. Sometimes multiple values are accepted. In this case, the multiple values are separated by pipes. For example, `profileFields=field1:valueA|valueB`. The accepted fields depend on the products the authenticated user has. Enumerated fields accept multiple values, while numeric and date fields also accept ranges, which are two values, pipe-separated. For example, `profileFields=rank:bronze|silver,birthDate:2000-01-01|2001-12-31` would match results whose custom field with internal name 'rank' is either bronze or silver, and whose 'birthDate' is between January 1, 2000 and December 31, 2001. To specify a single bound in ranges (like birth dates before December 31, 2001), use a pipe in one of the values, like `profileFields=birthDate:|2001-12-31`.
   *
   * The basic profile fields have one of the following identifiers:
   *
   * - `name` or `fullName`: Full name;
   * - `username`, `loginName` or `login`: Login name;
   * - `email`: E-mail;
   * - `phone`: Phone;
   * - `accountNumber`, `account`: Account number;
   * - `image`: Image (accepts a boolean value, indicating that either
   *   it is required that users either have images or not).
   *
   *
   * If address is an allowed profile field for search, specific address fields may be searched. The allowed ones are normally returned as the `addressFieldsInSearch` field in the corresponding result from a data-for-search request.
   * The specific address fields are:
   *
   * - `address`: Searches on any address field (not a specific field);
   * - `address.address`: Searches on the fields that represent the
   *   street address, which are `addressLine1`,
   *   `addressLine2`,
   *   `street`,
   *   `buildingNumber` and
   *   `complement`.
   *   Note that normally only a subset of them should be enabled in the
   *   configuration (either line 1 / 2 or street + number + complement);
   *
   * - `address.zip`: Searches for matching zip (postal) code;
   * - `address.poBox`: Searches for matching postal box;
   * - `address.neighborhood`: Searches by neighborhood;
   * - `address.city`: Searches by city;
   * - `address.region`: Searches by region (or state);
   * - `address.country`: Searches by ISO 3166-1 alpha-2 country code.
   * A note for dynamic custom fields: If a script is used to generate possible values for search, the list will be returned in the corresponding data, and it is sent as a pipe-separated list of values (not labels). For example: `profileFields=dynamic:a|b|c`. However, it is also possible to perform a keywords-like (full-text) search using the dynamic value label. In this case a single value, prefixed by single quotes should be used. For example: `profileFields=dynamic:'business`.
   */
  profileFields?: Array<string>;
}
