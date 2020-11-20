/* tslint:disable */

/**
 * The possible statuses for a token
 * Possible values are:
 * - `activationExpired`: The token has exceeded the activation deadline.
 * - `active`: The token is active and can be used.
 * - `blocked`: The token is blocked from being used.
 * - `canceled`: The token is canceled and cannot be used.
 * - `expired`: The token has exceeded the expiration date.
 * - `pending`: The token has been assigned to an user, but it's still pending for activation.
 * - `unassigned`: The token is not assigned to an user.
 */
export enum TokenStatusEnum {
  ACTIVATION_EXPIRED = 'activationExpired',
  ACTIVE = 'active',
  BLOCKED = 'blocked',
  CANCELED = 'canceled',
  EXPIRED = 'expired',
  PENDING = 'pending',
  UNASSIGNED = 'unassigned'
}
