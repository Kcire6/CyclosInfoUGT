/* tslint:disable */

/**
 * Possible actions that could be confirmed with a device for an access client
 * Possible values are:
 * - `block`: Block the access client
 * - `getActivationCode`: Get the activation code
 * - `unassign`: Unassign the access client
 * - `unblock`: Unblock the access client
 */
export enum ClientActionEnum {
  BLOCK = 'block',
  GET_ACTIVATION_CODE = 'getActivationCode',
  UNASSIGN = 'unassign',
  UNBLOCK = 'unblock'
}
