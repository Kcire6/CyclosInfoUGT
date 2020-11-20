/* tslint:disable */

/**
 * Possible options for ordering the results of a contact list.
 * Possible values are:
 * - `alphabeticallyAsc`: Users are ordered by name (or whatever field is set to format users) in ascending order.
 * - `alphabeticallyDesc`: Users are ordered by name (or whatever field is set to format users) in descending order.
 * - `relevance`: This is the default if keywords are used. Best matching users come first.
 */
export enum ContactOrderByEnum {
  ALPHABETICALLY_ASC = 'alphabeticallyAsc',
  ALPHABETICALLY_DESC = 'alphabeticallyDesc',
  RELEVANCE = 'relevance'
}
