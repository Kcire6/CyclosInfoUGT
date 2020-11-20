/* tslint:disable */

/**
 * The password status
 * Possible values are:
 * - `active`: The password is active and valid
 * - `disabled`: The password has been manually disabled
 * - `expired`: The password is expired
 * - `indefinitelyBlocked`: The password is blocked by exceeding the maximum attempts until it is manually unblocked
 * - `neverCreated`: The password has never been created for the user
 * - `pending`: The password was manually allowed (by admins) for the user to generate it, but it was not yet generated (never used for manual passwords)
 * - `reset`: The password has been reset (can be used for login but must then be changed)
 * - `temporarilyBlocked`: The password is temporarily blocked by exceeding the maximum attempts
 */
export enum PasswordStatusEnum {
  ACTIVE = 'active',
  DISABLED = 'disabled',
  EXPIRED = 'expired',
  INDEFINITELY_BLOCKED = 'indefinitelyBlocked',
  NEVER_CREATED = 'neverCreated',
  PENDING = 'pending',
  RESET = 'reset',
  TEMPORARILY_BLOCKED = 'temporarilyBlocked'
}
