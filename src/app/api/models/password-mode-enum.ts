/* tslint:disable */

/**
 * Indicates how a password is handled
 * Possible values are:
 * - `generated`: Passwords are always generated
 * - `manual`: Passwords are manually typed by users
 * - `otp`: One Time Passwords. are always generated and can be used only once
 * - `script`: Passwords are not stored in Cyclos, but handed-over for a script to verify them. Is normally used to implement single-sign-on with other apps.
 */
export enum PasswordModeEnum {
  GENERATED = 'generated',
  MANUAL = 'manual',
  OTP = 'otp',
  SCRIPT = 'script'
}
