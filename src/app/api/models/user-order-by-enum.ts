/* tslint:disable */

/**
 * Possible options for ordering the results of an user search.
 * Possible values are:
 * - `alphabeticallyAsc`: Users are ordered by name (or whatever field is set to format users) in ascending order.
 * - `alphabeticallyDesc`: Users are ordered by name (or whatever field is set to format users) in descending order.
 * - `creationDate`: Newly registered users are returned first.
 * - `distance`: Only useful when providing a location, will return nearer advertisements first.
 * - `random`: Users will be randomly returned
 * - `relevance`: This is the default if keywords are used. Best matching users come first.
 */
export enum UserOrderByEnum {
  ALPHABETICALLY_ASC = 'alphabeticallyAsc',
  ALPHABETICALLY_DESC = 'alphabeticallyDesc',
  CREATION_DATE = 'creationDate',
  DISTANCE = 'distance',
  RANDOM = 'random',
  RELEVANCE = 'relevance'
}
