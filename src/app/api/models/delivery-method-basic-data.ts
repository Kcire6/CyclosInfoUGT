/* tslint:disable */
import { Currency } from './currency';
import { User } from './user';

/**
 * Contains data shared by both DeliveryMethodDataForNew and DeliveryMethodDataForEdit
 */
export interface DeliveryMethodBasicData {

  /**
   * Contains the list of possible currencies for the delivery method
   */
  currencies?: Array<Currency>;

  /**
   * Reference to the owner of the delivery method
   */
  user?: User;
}
