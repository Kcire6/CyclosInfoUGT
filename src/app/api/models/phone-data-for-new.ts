/* tslint:disable */
import { PhoneBasicData } from './phone-basic-data';
import { PhoneNew } from './phone-new';

/**
 * Contains data for creating a new phone
 */
export interface PhoneDataForNew extends PhoneBasicData {

  /**
   * An example phone number
   */
  example?: string;

  /**
   * The phone populated with the default fields. This value can be modified and sent back on `POST /{user}/phones`.
   */
  phone?: PhoneNew;
}
