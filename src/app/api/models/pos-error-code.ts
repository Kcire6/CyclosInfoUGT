/* tslint:disable */

/**
 * Application-specific error codes for a POS operation error
 * Possible values are:
 * - `payerInaccessiblePrincipal`: The specified payer cannot use the given identification method (principal type) in the POS channel.
 * - `payerNotInChannel`: The specified payer user does not participate on the POS channel.
 * - `payerNotOperative`: The specified payer has some restriction that renders he/she inoperative for POS operations. An example of such case is when the user has pending agreements.
 * - `unexpected`: An unexpected error has occurred. See the `exceptionType` and `exceptionMessage` fields for the internal information.
 */
export enum PosErrorCode {
  PAYER_INACCESSIBLE_PRINCIPAL = 'payerInaccessiblePrincipal',
  PAYER_NOT_IN_CHANNEL = 'payerNotInChannel',
  PAYER_NOT_OPERATIVE = 'payerNotOperative',
  UNEXPECTED = 'unexpected'
}
