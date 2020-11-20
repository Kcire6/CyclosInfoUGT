/* tslint:disable */

/**
 * Determines how passwords should be visually entered by users
 * Possible values are:
 * - `textBox`: A simple string should be requested
 * - `virtualKeyboard`: A series of buttons should be presented to allow enter the password.
 */
export enum PasswordInputMethodEnum {
  TEXT_BOX = 'textBox',
  VIRTUAL_KEYBOARD = 'virtualKeyboard'
}
