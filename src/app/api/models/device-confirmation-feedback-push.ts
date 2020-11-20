/* tslint:disable */
import { DeviceConfirmationView } from './device-confirmation-view';

/**
 * The result of the action accepted by a device confirmation
 */
export interface DeviceConfirmationFeedbackPush {
  deviceConfirmation?: DeviceConfirmationView;

  /**
   * True if the operation approved by the device confirmation has finished successfully.
   */
  successful?: boolean;
}
