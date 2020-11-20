/* tslint:disable */
import { AddressBasicData } from './address-basic-data';
import { AddressNew } from './address-new';

/**
 * Contains data for creating a new address
 */
export interface AddressDataForNew extends AddressBasicData {

  /**
   * The address populated with the default fields. This value can be modified and sent back on `POST /{user}/addresses`.
   */
  address?: AddressNew;
}
