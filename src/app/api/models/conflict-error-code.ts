/* tslint:disable */

/**
 * Error codes for 409 Conflict entity HTTP status
 * Possible values are:
 * - `constraintViolatedOnRemove`: An attempt to remove some entity has failed, probably because that entity is in use, that is, is being referenced by some other entity.
 * - `staleEntity`: Failure in the optimistic lock. It means some entity was fetched for editing by 2 clients. Then they both saved it. The first one is successful, but the second one will fail. If you get this error, make sure the `version` field is being sent with the correct value, as fetched from the server.
 */
export enum ConflictErrorCode {
  CONSTRAINT_VIOLATED_ON_REMOVE = 'constraintViolatedOnRemove',
  STALE_ENTITY = 'staleEntity'
}
