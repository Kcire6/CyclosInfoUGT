/* tslint:disable */

/**
 * The possible status for an advertisement
 * Possible values are:
 * - `active`: The advertisement is published and can be seen by other users.
 * - `disabled`: The advertisement is disabled because the owner no longer has access to the currency of the advertisement. It cannot be seen by other users.
 * - `draft`: In draft status, only the owner can see and edit the advertisement. This status is only possible if the system is configured to require authorizations.
 * - `expired`: The advertisement publication period has already expired, and cannot be seen by other users.
 * - `hidden`: The advertisement is manually hidden from other users
 * - `pending`: The advertisement is pending for an authorization and cannot be seen by other users. This status is only possible if the system is configured to require authorizations.
 * - `scheduled`: The advertisement has a future publication period, and cannot be seen by other users.
 */
export enum AdStatusEnum {
  ACTIVE = 'active',
  DISABLED = 'disabled',
  DRAFT = 'draft',
  EXPIRED = 'expired',
  HIDDEN = 'hidden',
  PENDING = 'pending',
  SCHEDULED = 'scheduled'
}
