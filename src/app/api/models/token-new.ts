/* tslint:disable */

/**
 * Data to create a new token
 */
export interface TokenNew {

  /**
   * When set to true, the token will be initially active when `user` is also set. Has no effect if `user` is null.
   */
  activateNow?: boolean;

  /**
   * Either id or identification of the user to initially assign the token to. If set the token initial status will be either `pending` or `active` (if `activateNow` is true). If the user is not set, the initial status will always be `unassigned`.
   */
  user?: string;

  /**
   * The token value to create. The token value is commonly used as the card number.
   */
  value?: string;
}
