/* tslint:disable */

/**
 * Indicates the type of user interface
 * Possible values are:
 * - `custom`: A custom front-end application. Has no headers, footers or theme
 * - `main`: The main web user interface
 * - `mobile`: The mobile application user interface
 * - `pay`: The Ticket / Easy invoice confirmation application user interface
 */
export enum UiKind {
  CUSTOM = 'custom',
  MAIN = 'main',
  MOBILE = 'mobile',
  PAY = 'pay'
}
