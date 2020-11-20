/* tslint:disable */

/**
 * Indicates how a session was created. Can be modified in runtime.
 * Possible values are:
 * - `device`: The session was created from a trusted device without a password input.
 * - `login`: A regular user / password login was performed to create the session.
 */
export enum SessionSourceEnum {
  DEVICE = 'device',
  LOGIN = 'login'
}
