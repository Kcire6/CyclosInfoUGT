/* tslint:disable */

/**
 * Indicates the possible actions the authenticated user can perform over this password
 */
export interface PasswordActions {

  /**
   * Granted only for those generated passwords that have a setting to  require administration authorization and have the status  `neverCreated`. Can only be done by administrators with permissions to enable/disable  the password.
   */
  allowGeneration?: boolean;

  /**
   * Manually change the password.
   */
  change?: boolean;

  /**
   * Manually generate another value for a generated password. Can only be  done for the authenticated user himself.
   */
  changeGenerated?: boolean;

  /**
   * Disables a password, making it unusable until being enabled again.
   */
  disable?: boolean;

  /**
   * Enables a disabled password, either manually disabled or by exceeding the wrong tries, depending on the password type configuration.
   */
  enable?: boolean;

  /**
   * Generate the password value for the first time. Can only be done for the authenticated user himself.
   */
  generate?: boolean;

  /**
   * Resets a manual password to a generated value and send it to the user. Can also be used to reset and send the main channel's access password if it is generated. The new password is initially expired, so the user needs to change it on first login.
   */
  resetAndSend?: boolean;

  /**
   * Resets a generated password, making it go back to the  `pending` state. The user will then be able to generate a new value for it.
   */
  resetGenerated?: boolean;

  /**
   * Unblocks a password which has been blocked by exceeding the wrong tries
   */
  unblock?: boolean;
}
