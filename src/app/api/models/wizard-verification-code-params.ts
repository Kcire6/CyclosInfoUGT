/* tslint:disable */
import { SendMediumEnum } from './send-medium-enum';

/**
 * Parameters to send a verification code
 */
export interface WizardVerificationCodeParams {

  /**
   * Indicates what to verify - either email or mobile via SMS.
   */
  medium?: SendMediumEnum;

  /**
   * Either the email address or mobile phone number to verify.
   */
  to?: string;
}
