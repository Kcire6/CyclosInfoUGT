/* tslint:disable */

/**
 * The type of system alert
 * Possible values are:
 * - `accountFeeChargedNoFailures`: An account fee charge has finished without any failures
 * - `accountFeeChargedWithFailures`: An account fee charge has finished with at least one failure
 * - `applicationRestarted`: The application has been restarted, or started for the first time
 * - `custom`: Custom alerts thrown by scripts
 * - `emailSendingFailed`: An E-mail couldn't be sent
 * - `maxBlockedUsersReached`: The max number of users blocked from the same IP has been reached
 * - `maxGlobalSmsReached`: The groups under a certain configuration have run out of SMS messages
 * - `maxIncorrectLoginAttempts`: Someone tried for a given number of tries to login with an invalid username
 * - `smsSendingFailed`: An SMS couldn't be sent
 */
export enum SystemAlertTypeEnum {
  ACCOUNT_FEE_CHARGED_NO_FAILURES = 'accountFeeChargedNoFailures',
  ACCOUNT_FEE_CHARGED_WITH_FAILURES = 'accountFeeChargedWithFailures',
  APPLICATION_RESTARTED = 'applicationRestarted',
  CUSTOM = 'custom',
  EMAIL_SENDING_FAILED = 'emailSendingFailed',
  MAX_BLOCKED_USERS_REACHED = 'maxBlockedUsersReached',
  MAX_GLOBAL_SMS_REACHED = 'maxGlobalSmsReached',
  MAX_INCORRECT_LOGIN_ATTEMPTS = 'maxIncorrectLoginAttempts',
  SMS_SENDING_FAILED = 'smsSendingFailed'
}
