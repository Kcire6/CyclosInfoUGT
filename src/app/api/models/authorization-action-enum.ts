/* tslint:disable */

/**
 * Possible actions that could be confirmed with a device for a payment authorization
 * Possible values are:
 * - `authorize`: Authorize the payment authorization
 * - `cancel`: Cancel the payment authorization
 * - `deny`: Deny the payment authorization
 */
export enum AuthorizationActionEnum {
  AUTHORIZE = 'authorize',
  CANCEL = 'cancel',
  DENY = 'deny'
}
