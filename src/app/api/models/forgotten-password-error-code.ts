/* tslint:disable */

/**
 * Application-specific error codes for a ForgottenPassword error.
 * Possible values are:
 * - `invalidSecurityAnswer`: if the answer for the security question was incorrect.
 * - `unexpected`: An unexpected error has occurred.
 */
export enum ForgottenPasswordErrorCode {
  INVALID_SECURITY_ANSWER = 'invalidSecurityAnswer',
  UNEXPECTED = 'unexpected'
}
