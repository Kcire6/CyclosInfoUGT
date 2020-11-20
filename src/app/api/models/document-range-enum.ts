/* tslint:disable */

/**
 * The document range, either shared or individual
 * Possible values are:
 * - `individual`: A document belonging to a specific user
 * - `shared`: Shared documents. They have a category, and are the same documents for all users
 */
export enum DocumentRangeEnum {
  INDIVIDUAL = 'individual',
  SHARED = 'shared'
}
