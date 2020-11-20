/* tslint:disable */
import { CaptchaResponse } from './captcha-response';
import { SendMediumEnum } from './send-medium-enum';

/**
 * Definitions to request a the forgotten user identification or password change.
 */
export interface ForgottenPasswordRequest {

  /**
   * The captcha response required when something is returned in `DataForLogin.forgotPasswordCaptchaProvider`.
   */
  captcha?: CaptchaResponse;

  /**
   * Which medium to send the code which is required for proceeding with the operation
   */
  sendMedium?: SendMediumEnum;

  /**
   * An identification method for the user. Allows the same identification methods (principal types) as the login, plus e-mail and mobile phone (if they are used as identification methods).
   */
  user?: string;
}
