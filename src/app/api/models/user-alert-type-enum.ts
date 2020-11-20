/* tslint:disable */

/**
 * The type of user alert
 * Possible values are:
 * - `custom`: Custom alerts thrown by scripts
 * - `givenVeryBadRefs`: A user has exceeded the maximum number of given very bad references
 * - `insufficientBalanceForInitialCredit`: A user account's initial credit couldn't be granted because the source account lacked funds
 * - `maxDeviceActivationAttemptsReached`: A user has reached the maximum number of attempts to activate a device by code
 * - `maxDeviceConfirmationCheckAttemptsReached`: A user has reached the maximum number of attempts to check for a processed device confirmation
 * - `maxTokenActivationAttemptsReached`: A user has reached the maximum number of attempts to activate a token
 * - `maxUserLocalizationAttemptsReached`: A user has reached the maximum number of attempts to find other users
 * - `maxVoucherRedeemAttemptsReached`: A user has reached the maximum number of attempts to redeem a voucher
 * - `moveUserAutomaticallyFailed`: A user couldn't be moved automatically to another group
 * - `passwordDisabledByTries`: A user password has been disabled by exceeding the wrong attempts
 * - `passwordTemporarilyBlocked`: A user password has been temporarily blocked by exceeding the wrong attempts
 * - `receivedVeryBadRefs`: A user has exceeded the maximum number of received very bad references
 * - `scheduledPaymentFailed`: An scheduled payment has failed
 */
export enum UserAlertTypeEnum {
  CUSTOM = 'custom',
  GIVEN_VERY_BAD_REFS = 'givenVeryBadRefs',
  INSUFFICIENT_BALANCE_FOR_INITIAL_CREDIT = 'insufficientBalanceForInitialCredit',
  MAX_DEVICE_ACTIVATION_ATTEMPTS_REACHED = 'maxDeviceActivationAttemptsReached',
  MAX_DEVICE_CONFIRMATION_CHECK_ATTEMPTS_REACHED = 'maxDeviceConfirmationCheckAttemptsReached',
  MAX_TOKEN_ACTIVATION_ATTEMPTS_REACHED = 'maxTokenActivationAttemptsReached',
  MAX_USER_LOCALIZATION_ATTEMPTS_REACHED = 'maxUserLocalizationAttemptsReached',
  MAX_VOUCHER_REDEEM_ATTEMPTS_REACHED = 'maxVoucherRedeemAttemptsReached',
  MOVE_USER_AUTOMATICALLY_FAILED = 'moveUserAutomaticallyFailed',
  PASSWORD_DISABLED_BY_TRIES = 'passwordDisabledByTries',
  PASSWORD_TEMPORARILY_BLOCKED = 'passwordTemporarilyBlocked',
  RECEIVED_VERY_BAD_REFS = 'receivedVeryBadRefs',
  SCHEDULED_PAYMENT_FAILED = 'scheduledPaymentFailed'
}
