/* tslint:disable */

/**
 * Fields which can be used when filtering by user address, by using the `address.<addressField>` name
 * Possible values are:
 * - `address`: Filters by any field in the street address: `addressLine1`, `addressLine2`, `street`, `buildingNumber` or `complement`
 * - `city`: Filters by city name
 * - `country`: Filters by country, represented as 2-letter, uppercase, ISO 3166-1 code (exact match)
 * - `neighborhood`: Filters by neighborhood name
 * - `poBox`: Filters by post-office box (exact match)
 * - `region`: Filters by region or state
 * - `zip`: Filters by zip (postal) code (exact match)
 */
export enum AddressQueryFieldEnum {
  ADDRESS = 'address',
  CITY = 'city',
  COUNTRY = 'country',
  NEIGHBORHOOD = 'neighborhood',
  PO_BOX = 'poBox',
  REGION = 'region',
  ZIP = 'zip'
}
