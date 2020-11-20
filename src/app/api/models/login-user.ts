/* tslint:disable */
import { TimeInterval } from './time-interval';

/**
 * Contains fields to login an user as administrator
 */
export interface LoginUser {

  /**
   * The channel internal name. Defaults to `main`.
   */
  channel?: string;

  /**
   * The user password. The password type is set in the channel configuration.
   */
  password?: string;

  /**
   * The IP address of the user requesting the login.
   */
  remoteAddress?: string;

  /**
   * The amount of time the session is valid. The channel configuration has the session timeout, which is the maximum amount of time that can be set. If the given value is higher than the one in the configuration, it will be ignored. Defaults to the timeout set in the configuration.
   */
  sessionTimeout?: TimeInterval;

  /**
   * The user identification for login. The accepted kind of identification (login name, e-mail, etc) depend on the channel configuration.
   */
  user?: string;
}
