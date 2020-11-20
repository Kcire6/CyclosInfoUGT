/* tslint:disable */

/**
 * How an owner account can be accessed by operators
 * Possible values are:
 * - `full`: The account is fully visible
 * - `incoming`: All incoming and own payments are visible
 * - `none`: The account is not visible
 * - `outgoing`: All outgoing and own payments are visible
 * - `own`: Only payments performed / received by the operators are visible
 */
export enum OperatorGroupAccountAccessEnum {
  FULL = 'full',
  INCOMING = 'incoming',
  NONE = 'none',
  OUTGOING = 'outgoing',
  OWN = 'own'
}
