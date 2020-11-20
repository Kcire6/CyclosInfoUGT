/* tslint:disable */

/**
 * Error codes for 401 Unauthorized HTTP status.
 * Possible values are:
 * - `blockedAccessClient`: The access client used for access is blocked
 * - `invalidAccessClient`: The access client used for access is invalid
 * - `invalidAccessToken`: The OAuth2 / OpenID Connect access token used for access is invalid
 * - `invalidChannelUsage`: Attempt to login on a stateless-only channel, or use stateless in a stateful-only channel, or invoke as guest in a channel configuration which is only for users
 * - `invalidNetwork`: Attempt to access a network that has been disabled
 * - `loggedOut`: The session token used for access is invalid
 * - `login`: Either user identification (principal) or password are invalid. May have additional information, such as the user / password status
 * - `missingAuthorization`: Attempt to access an operation as guest, but the operation requires authentication
 * - `remoteAddressBlocked`: The IP address being used for access has been blocked by exceeding tries with invalid users
 * - `unauthorizedAddress`: The user cannot access the system using an IP address that is not white-listed
 * - `unauthorizedUrl`: The user's configuration demands access using a specific URL, and this access is being done using another one
 */
export enum UnauthorizedErrorCode {
  BLOCKED_ACCESS_CLIENT = 'blockedAccessClient',
  INVALID_ACCESS_CLIENT = 'invalidAccessClient',
  INVALID_ACCESS_TOKEN = 'invalidAccessToken',
  INVALID_CHANNEL_USAGE = 'invalidChannelUsage',
  INVALID_NETWORK = 'invalidNetwork',
  LOGGED_OUT = 'loggedOut',
  LOGIN = 'login',
  MISSING_AUTHORIZATION = 'missingAuthorization',
  REMOTE_ADDRESS_BLOCKED = 'remoteAddressBlocked',
  UNAUTHORIZED_ADDRESS = 'unauthorizedAddress',
  UNAUTHORIZED_URL = 'unauthorizedUrl'
}
