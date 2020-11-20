/* tslint:disable */

/**
 * The possible statuses for an user
 * Possible values are:
 * - `active`: The user is active and can use the system normally.
 * - `blocked`: The user has been blocked from accessing the system. Other users still see him/her.
 * - `disabled`: The user has been disabled - he/she cannot access the system and is invisible by other users.
 * - `pending`: The user registration is pending a confirmation. Probably the user has received an e-mail with a link that must be followed to complete the activation. The user is invisible by other users.
 * - `purged`: The user was permanently removed and had all his private data removed. Only transactions are kept for historical reasons.
 * - `removed`: The user was permanently removed. It's profile is kept for historical purposes.
 */
export enum UserStatusEnum {
  ACTIVE = 'active',
  BLOCKED = 'blocked',
  DISABLED = 'disabled',
  PENDING = 'pending',
  PURGED = 'purged',
  REMOVED = 'removed'
}
