/* tslint:disable */

/**
 * The status regarding authorization a transaction is in. If configured, transactions can require one or more levels of authorization in order to be processed. If a transaction has the this status null, it means it never went through the authorization process.
 * Possible values are:
 * - `authorized`: The transaction was fully authorized and is processed
 * - `canceled`: The authorization submission was canceled by the submitter
 * - `denied`: The authorization was denied
 * - `expired`: The pending authorization has expired
 * - `pending`: The transaction is pending authorization
 */
export enum TransactionAuthorizationStatusEnum {
  AUTHORIZED = 'authorized',
  CANCELED = 'canceled',
  DENIED = 'denied',
  EXPIRED = 'expired',
  PENDING = 'pending'
}
