/* tslint:disable */
import { InvalidDeviceConfirmationEnum } from './invalid-device-confirmation-enum';
import { PasswordStatusEnum } from './password-status-enum';
import { PasswordType } from './password-type';
import { UnauthorizedErrorCode } from './unauthorized-error-code';
import { UserStatusEnum } from './user-status-enum';

/**
 * Error returned when a HTTP status code 401 occurs
 */
export interface UnauthorizedError {
  code?: UnauthorizedErrorCode;

  /**
   * Is the OAuth2 / OpenID Connect required error message. Is only returned when `code` is `invalidAccessToken`.
   */
  error?: string;

  /**
   * The result associated to an invalid device confrmation. May only returned when `code` is `login` and the login was performed with a trusted device.
   */
  invalidDeviceConfirmation?: InvalidDeviceConfirmationEnum;

  /**
   * May only returned when `code` is `login` and there is a login confirmation with password defined for the channel.
   */
  missingSecondaryPassword?: PasswordType;

  /**
   * May only returned when `code` is `login`.
   */
  passwordStatus?: PasswordStatusEnum;

  /**
   * Whether confirmations with device are allowed or not. May only returned when `code` is `login` and there is a login confirmation defined for the channel.
   */
  secondaryDeviceAllowed?: boolean;

  /**
   * May only returned when `code` is `login`.
   */
  userStatus?: UserStatusEnum;
}
