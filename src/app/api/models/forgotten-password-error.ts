/* tslint:disable */
import { Error } from './error';
import { ForgottenPasswordErrorCode } from './forgotten-password-error-code';

/**
 * Error when changing a forgotten password
 */
export interface ForgottenPasswordError extends Error {
  code?: ForgottenPasswordErrorCode;

  /**
   * Flag indicating if the key received on the forgotten password reset request was invalidated because the maximum tries was reached. Only if code is `invalidSecurityAnswer`.
   */
  keyInvalidated?: boolean;
}
