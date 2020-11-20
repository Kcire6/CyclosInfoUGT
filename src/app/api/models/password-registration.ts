/* tslint:disable */

/**
 * Data regarding a password being registered with the user
 */
export interface PasswordRegistration {

  /**
   * Depending on the client, if a confirm password field is shown to users, it might be useful to check the confirmation password value on the server. This way, if there are other validation exceptions, they are all shown together. In this case, this field should be set to `true` and the `confirmationValue` should be passed in with the user input. However, in cases where clients just want to register a user with a password non interactively (like in a bulk registration), passing the password value twice is not desirable. In such cases, this field can be left empty (or set to `false`), and the `confirmationValue` will be ignored.
   */
  checkConfirmation?: boolean;

  /**
   * The password confirmation value. Is ignored unless `checkConfirmation` is set to `true`.
   */
  confirmationValue?: string;

  /**
   * When set to true will force the user to change it after the first login
   */
  forceChange?: boolean;

  /**
   * The password type
   */
  type?: string;

  /**
   * The password value
   */
  value?: string;
}
