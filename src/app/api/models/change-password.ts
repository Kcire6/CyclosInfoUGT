/* tslint:disable */

/**
 * Contains fields used as parameters when changing a user's password
 */
export interface ChangePassword {

  /**
   * Depending on the client, if a confirm password field is shown to users, it might be useful to check the confirmation password value on the server. This way, if there are other validation exceptions, they are all shown together. In this case, this field should be set to `true` and the `confirmationValue` should be passed in with the user input. However, in cases where clients just want to register a user with a password non interactively (like in a bulk registration), passing the password value twice is not desirable. In such cases, this field can be left empty (or set to `false`), and the `newPasswordConfirmation` will be ignored.
   */
  checkConfirmation?: boolean;

  /**
   * Indicates whether the new password needs to be changed on the next login. Only used when admins / brokers are changing the password of a user they manage.
   */
  forceChange?: boolean;

  /**
   * The new password value. Required.
   */
  newPassword?: string;

  /**
   * The new password confirmation value. Is ignored unless `checkConfirmation` is set to `true`.
   */
  newPasswordConfirmation?: string;

  /**
   * The current password value. Required when the user is changing his own password. Not used when admins / brokers are changing the password of a user they manage.
   */
  oldPassword?: string;
}
