/* tslint:disable */
import { SendMediumEnum } from './send-medium-enum';

/**
 * Result of a request to change a forgotten password
 */
export interface ForgottenPasswordResponse {

  /**
   * The medium to which the verification code was sent
   */
  sendMedium?: SendMediumEnum;

  /**
   * Either a single element array with the e-mail address or the mobile phone number to which the verification code was sent. If not exactly the value used to identify the user, the values will be masked, for example: `joh*******@email.com` or `(**) *****-*123`.
   */
  sentTo?: Array<string>;
}
