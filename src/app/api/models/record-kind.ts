/* tslint:disable */

/**
 * The possible kinds of a record, which can either belong to system or to an user
 * Possible values are:
 * - `system`: The record belongs to the system, and is unrelated to an user
 * - `user`: The record belongs to a specific user
 */
export enum RecordKind {
  SYSTEM = 'system',
  USER = 'user'
}
