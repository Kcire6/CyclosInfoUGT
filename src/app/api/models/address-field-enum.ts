/* tslint:disable */

/**
 * The address fields that can be configured to be enabled or required
 * Possible values are:
 * - `addressLine1`: The first line of the descriptive address
 * - `addressLine2`: The second line of the descriptive address
 * - `buildingNumber`: The numeric identifier for a land parcel, house, building or other
 * - `city`: The city name
 * - `complement`: The complement (like apartment number)
 * - `country`: The country, represented as 2-letter, uppercase, ISO 3166-1 code
 * - `neighborhood`: The neighborhood name
 * - `poBox`: The post-office box, is an uniquely addressable box
 * - `region`: The region or state
 * - `street`: The street name
 * - `zip`: A zip code that identifies a specific geographic (postal) delivery area
 */
export enum AddressFieldEnum {
  ADDRESS_LINE_1 = 'addressLine1',
  ADDRESS_LINE_2 = 'addressLine2',
  BUILDING_NUMBER = 'buildingNumber',
  CITY = 'city',
  COMPLEMENT = 'complement',
  COUNTRY = 'country',
  NEIGHBORHOOD = 'neighborhood',
  PO_BOX = 'poBox',
  REGION = 'region',
  STREET = 'street',
  ZIP = 'zip'
}
