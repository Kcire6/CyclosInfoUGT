/* tslint:disable */
import { SendMediumEnum } from './send-medium-enum';

/**
 * The parameters for confirming a forgotten password reset
 */
export interface ChangeForgottenPassword {

  /**
   * Depending on the client, if a confirm password field is shown to users, it might be useful to check the confirmation password value on the server. This way, if there are other validation exceptions, they are all shown together. In this case, this field should be set to `true` and the `confirmationValue` should be passed in with the user input. However, in cases where clients just want to register a user with a password non interactively (like in a bulk registration), passing the password value twice is not desirable. In such cases, this field can be left empty (or set to `false`), and the `newPasswordConfirmation` will be ignored.
   */
  checkConfirmation?: boolean;

  /**
   * The verification code which was sent to the user
   */
  code?: string;

  /**
   * The key received by e-mail on the forgotten password reset request
   *
   * @deprecated
   */
  key?: string;

  /**
   * The new password value. Required when the password is manual.
   */
  newPassword?: string;

  /**
   * The new password confirmation value. Is ignored unless `checkConfirmation` is set to `true`.
   */
  newPasswordConfirmation?: string;

  /**
   * When a security question is asked, this is the answer, and is required.
   */
  securityAnswer?: string;

  /**
   * Only used for generated passwords. Is the send medium to which to send the password. Normally is the same as the one to which the verification code was sent.
   */
  sendMedium?: SendMediumEnum;

  /**
   * The user identification for password change
   */
  user?: string;
}
