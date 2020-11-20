/* tslint:disable */

/**
 * The status of a mobile phone verification challenge
 * Possible values are:
 * - `codeNotSent`: There isn't a current code to be verified (for example the was never sent or the code was reset by max attempts reached)
 * - `expired`: The code has expired and can't be used anymore.
 * - `failed`: The code was wrong (it doesn't match the expected value)
 * - `maxAttemptsReached`: The max attempts with an invalid code was reached.
 * - `success`: The code was correct and accepted.
 */
export enum CodeVerificationStatusEnum {
  CODE_NOT_SENT = 'codeNotSent',
  EXPIRED = 'expired',
  FAILED = 'failed',
  MAX_ATTEMPTS_REACHED = 'maxAttemptsReached',
  SUCCESS = 'success'
}
