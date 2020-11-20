/* tslint:disable */
import { DeviceConfirmationStatusEnum } from './device-confirmation-status-enum';
import { DeviceConfirmationTypeEnum } from './device-confirmation-type-enum';
import { Entity } from './entity';

/**
 * Detailed information when viewing a device confirmation
 */
export interface DeviceConfirmationView extends Entity {

  /**
   * The QR content for this confirmation. The content is a URL of the form:  cyclos://confirmation?id=confirmation_id&description=i18n_confirmation_type&fields=Label1:Value1|Label2:Value2...
   */
  qrContent?: string;

  /**
   * The status of the device confirmation.
   */
  status?: DeviceConfirmationStatusEnum;

  /**
   * The type of the device confirmation.
   */
  type?: DeviceConfirmationTypeEnum;
}
