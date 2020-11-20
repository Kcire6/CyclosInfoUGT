/* tslint:disable */
import { EntityReference } from './entity-reference';
import { ForbiddenErrorCode } from './forbidden-error-code';
import { InvalidDeviceConfirmationEnum } from './invalid-device-confirmation-enum';

/**
 * Error returned when a HTTP status code 403 occurs
 */
export interface ForbiddenError {
  code?: ForbiddenErrorCode;

  /**
   * The result associated to an invalid device confrmation. Only sent if `code` is `invalidDeviceConfirmation`
   */
  invalidDeviceConfirmation?: InvalidDeviceConfirmationEnum;

  /**
   * The maximum attemps for a device activation was reached. The authenticated user is blocked. Only sent if `code` is `invalidDeviceActivationCode`
   */
  maxDeviceActivationReached?: boolean;

  /**
   * The password type of the failed password. Only sent if `code` is one of: - `invalidPassword` - `expiredPassword` - `temporarilyBlocked` - `indefinitelyBlocked`
   */
  passwordType?: EntityReference;
}
