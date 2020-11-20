/* tslint:disable */
import { DeliveryMethodBasicData } from './delivery-method-basic-data';
import { DeliveryMethodNew } from './delivery-method-new';

/**
 * Contains data for creating a new webshop delivery method
 */
export interface DeliveryMethodDataForNew extends DeliveryMethodBasicData {

  /**
   * The delivery method populated with the default fields. This value can be modified and sent back on `POST /{user}/delivery-methods`.
   */
  deliveryMethod?: DeliveryMethodNew;
}
