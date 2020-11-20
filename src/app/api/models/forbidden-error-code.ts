/* tslint:disable */

/**
 * Error codes for 403 Forbidden HTTP status.
 * Possible values are:
 * - `devicePinRemoved`: The device pin was removed by exceeding the allowed attempts
 * - `expiredPassword`: The password being used has expired
 * - `illegalAction`: Attempt to perform an action that is not allowed on this context
 * - `inaccessibleChannel`: This channel cannot be accessed by the user
 * - `inaccessiblePrincipal`: The used identification method (principal type) cannot be used in this channel
 * - `indefinitelyBlocked`: The password was indefinitely blocked by exceeding the allowed attempts
 * - `invalidDeviceActivationCode`: The device activation code was no valid
 * - `invalidDeviceConfirmation`: The device confirmation being used is invalid (normally as a confirmation password)
 * - `invalidPassword`: The password being used is invalid (normally the confirmation password)
 * - `operatorWithPendingAgreements`: The operator cannot access because his owner member has pending agreements
 * - `pendingAgreements`: There is at least one agreement which needs to be accepted in order to access the system
 * - `permissionDenied`: The operation was denied because a required permission was not granted
 * - `resetPassword`: The password being used was manually reset
 * - `temporarilyBlocked`: The password was temporarily blocked by exceeding the allowed attempts
 */
export enum ForbiddenErrorCode {
  DEVICE_PIN_REMOVED = 'devicePinRemoved',
  EXPIRED_PASSWORD = 'expiredPassword',
  ILLEGAL_ACTION = 'illegalAction',
  INACCESSIBLE_CHANNEL = 'inaccessibleChannel',
  INACCESSIBLE_PRINCIPAL = 'inaccessiblePrincipal',
  INDEFINITELY_BLOCKED = 'indefinitelyBlocked',
  INVALID_DEVICE_ACTIVATION_CODE = 'invalidDeviceActivationCode',
  INVALID_DEVICE_CONFIRMATION = 'invalidDeviceConfirmation',
  INVALID_PASSWORD = 'invalidPassword',
  OPERATOR_WITH_PENDING_AGREEMENTS = 'operatorWithPendingAgreements',
  PENDING_AGREEMENTS = 'pendingAgreements',
  PERMISSION_DENIED = 'permissionDenied',
  RESET_PASSWORD = 'resetPassword',
  TEMPORARILY_BLOCKED = 'temporarilyBlocked'
}
