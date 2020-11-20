/* tslint:disable */

/**
 * Data sent to the server containing the response of a user to a captcha challenge
 */
export interface CaptchaResponse {

  /**
   * The captcha challenge identifier
   */
  challenge?: string;

  /**
   * The captcha response, as informed by the user
   */
  response?: string;
}
