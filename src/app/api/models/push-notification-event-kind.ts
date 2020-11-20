/* tslint:disable */

/**
 * Kind of events that can be triggered on push notifications
 * Possible values are:
 * - `accountStatus`: The account status (balance, reserved amount, etc) has changed
 * - `deviceConfirmation`: A device confirmation was approved / rejected
 * - `deviceConfirmationFeedback`: The result of an operation approved by a device confirmation
 * - `identityProviderCallback`: An identity provider has returned profile data for the user
 * - `loggedOut`: The current session has been invalidated
 * - `newMessage`: New message on the user's inbox
 * - `newNotification`: New received notification
 * - `paymentAuthorization`: A payment authorization status has changed
 * - `permissionsChanged`: The current session had its permissions changed by modifying the user products
 * - `ticket`: A ticket status has changed
 */
export enum PushNotificationEventKind {
  ACCOUNT_STATUS = 'accountStatus',
  DEVICE_CONFIRMATION = 'deviceConfirmation',
  DEVICE_CONFIRMATION_FEEDBACK = 'deviceConfirmationFeedback',
  IDENTITY_PROVIDER_CALLBACK = 'identityProviderCallback',
  LOGGED_OUT = 'loggedOut',
  NEW_MESSAGE = 'newMessage',
  NEW_NOTIFICATION = 'newNotification',
  PAYMENT_AUTHORIZATION = 'paymentAuthorization',
  PERMISSIONS_CHANGED = 'permissionsChanged',
  TICKET = 'ticket'
}
