/* tslint:disable */

/**
 * Application-specific error codes for an OTP error.
 * Possible values are:
 * - `errorSendingEmail`: An error has occurred trying to send the OTP through email.
 * - `errorSendingSms`: An error has occurred trying to send the OTP through SMS.
 * - `unexpected`: An unexpected error has occurred.
 */
export enum OtpErrorCode {
  ERROR_SENDING_EMAIL = 'errorSendingEmail',
  ERROR_SENDING_SMS = 'errorSendingSms',
  UNEXPECTED = 'unexpected'
}
