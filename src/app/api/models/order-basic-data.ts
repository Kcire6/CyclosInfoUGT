/* tslint:disable */
import { Address } from './address';
import { AddressConfiguration } from './address-configuration';
import { DeliveryMethod } from './delivery-method';
import { User } from './user';

/**
 * Common data for `OrderDataForNew` and `OrderDataForEdit`
 */
export interface OrderBasicData {

  /**
   * The address configuration for the buyer
   */
  addressConfiguration?: AddressConfiguration;

  /**
   * List containing the visible addresses of the buyer. When creating or updating an order it can be filled with the fields from one of these existing addresses or a custom delivery address can be set.
   */
  addresses?: Array<Address>;
  buyer?: User;

  /**
   * List with all delivery methods defined for the seller. When creating or updating an order it can be filled with the fields from one of these existing delivery methods or a custom delivery method can be set.
   */
  deliveryMethods?: Array<DeliveryMethod>;
  seller?: User;
}
