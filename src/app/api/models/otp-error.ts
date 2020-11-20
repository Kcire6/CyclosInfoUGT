/* tslint:disable */
import { Error } from './error';
import { OtpErrorCode } from './otp-error-code';
import { OutboundSmsStatusEnum } from './outbound-sms-status-enum';

/**
 * Error when requesting a new One-time-Password (OTP) or a verification code
 */
export interface OtpError extends Error {
  code?: OtpErrorCode;

  /**
   * Only if code is `errorSendingSms`
   */
  smsStatus?: OutboundSmsStatusEnum;
}
