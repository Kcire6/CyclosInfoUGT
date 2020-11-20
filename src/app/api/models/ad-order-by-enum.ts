/* tslint:disable */

/**
 * Indicates how advertisements results are ordered.
 * Possible values are:
 * - `date`: Newest advertisements are returned first.
 * - `distance`: Only useful when providing a location, will return nearer advertisements first.
 * - `priceAsc`: Smaller prices are returned first. Advertisements without price are returned last.
 * - `priceDesc`: Higher prices are returned first. Advertisements without price are returned last.
 * - `random`: Without definite order
 * - `relevance`: This is the default if keywords are used. Best matching advertisements come first.
 */
export enum AdOrderByEnum {
  DATE = 'date',
  DISTANCE = 'distance',
  PRICE_ASC = 'priceAsc',
  PRICE_DESC = 'priceDesc',
  RANDOM = 'random',
  RELEVANCE = 'relevance'
}
