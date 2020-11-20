/* tslint:disable */

/**
 * Contains data to perform a confirmation action (e.g approve / reject)
 */
export interface DeviceConfirmationActionParams {

  /**
   * The id of the device used to perform the confirmation action.
   */
  deviceId?: string;

  /**
   * The HMAC-SHA256 calculated for the QR code using the secret key stored in the device.
   */
  hmac?: string;
}
