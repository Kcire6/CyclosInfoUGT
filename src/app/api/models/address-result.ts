/* tslint:disable */
import { Address } from './address';
import { AddressContactInfo } from './address-contact-info';

/**
 * Information of an address as returned on list
 */
export interface AddressResult extends Address {

  /**
   * If enabled, contains additional contact information for the address
   */
  contactInfo?: AddressContactInfo;

  /**
   * Indicates whether this is the default address for the user
   */
  defaultAddress?: boolean;

  /**
   * Indicates whether this address is hidden for other users. It always returns false if the authenticated user doesn't manage the owner of this address.
   */
  hidden?: boolean;
}
