/* tslint:disable */

/**
 * Possible actions that could be confirmed with a device for another device
 * Possible values are:
 * - `activate`: Activate a device as trusted
 * - `remove`: Remove the trusted device
 */
export enum DeviceActionEnum {
  ACTIVATE = 'activate',
  REMOVE = 'remove'
}
