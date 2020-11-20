/* tslint:disable */

/**
 * An action performed when a transaction was pending authorization
 * Possible values are:
 * - `authorized`: The transaction was authorized
 * - `canceled`: The authorization process was canceled by the payer/admin
 * - `denied`: The transaction was denied (rejected)
 * - `expired`: The authorization process has expired by system
 */
export enum TransactionAuthorizationActionEnum {
  AUTHORIZED = 'authorized',
  CANCELED = 'canceled',
  DENIED = 'denied',
  EXPIRED = 'expired'
}
