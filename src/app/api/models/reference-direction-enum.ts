/* tslint:disable */

/**
 * The reference direction in relation to a given user
 * Possible values are:
 * - `given`: The reference was given from the given user to another user
 * - `received`: The reference was received by the given user from another user
 */
export enum ReferenceDirectionEnum {
  GIVEN = 'given',
  RECEIVED = 'received'
}
