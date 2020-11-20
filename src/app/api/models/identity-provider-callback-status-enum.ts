/* tslint:disable */

/**
 * The status the result of a callback from an identity provider.
 * Possible values are:
 * - `denied`: The user has denied the request. Generally nothing should be done, as the popup will be automatically closed.
 * - `error`: There was an error. The `errorMessage` property is likely to contain the error description, though it can be empty. If so, a generic error message should be displayed.
 * - `linked`: The currently logged user was successfully linked to the provider.
 * - `loginEmail`: Successful login. No user was previously linked to this provider account, but a user was matched by e-mail and automatically linked.  The `sessionToken` is returned.
 * - `loginLink`: Successful login with a user was previously linked to the provider.
 * - `loginNoEmail`: Similar to `loginNoMatch`, except that the identity provider hasn't returned / disclosed the user's e-mail address.
 * - `loginNoMatch`: No matching user, either linked or by e-mail. If on the next login the `requestId` value is passed in, a link will be automatically created, so the next time the login works directly.  The `sessionToken` is returned.
 * - `registrationData`: The profile data was read and the available data has been returned.
 * - `registrationDone`: The user was directly registered and logged-in. The `sessionToken` is returned.
 * - `wizard`: The wizard execution has transitioned to the next step, and the identity provider information was stored on the server.
 */
export enum IdentityProviderCallbackStatusEnum {
  DENIED = 'denied',
  ERROR = 'error',
  LINKED = 'linked',
  LOGIN_EMAIL = 'loginEmail',
  LOGIN_LINK = 'loginLink',
  LOGIN_NO_EMAIL = 'loginNoEmail',
  LOGIN_NO_MATCH = 'loginNoMatch',
  REGISTRATION_DATA = 'registrationData',
  REGISTRATION_DONE = 'registrationDone',
  WIZARD = 'wizard'
}
