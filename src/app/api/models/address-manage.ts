/* tslint:disable */
import { AddressContactInfoManage } from './address-contact-info-manage';
import { GeographicalCoordinate } from './geographical-coordinate';

/**
 * Common fields for either creating or editing an address
 */
export interface AddressManage {

  /**
   * The first line of the descriptive address
   */
  addressLine1?: string;

  /**
   * The second line of the descriptive address
   */
  addressLine2?: string;

  /**
   * The numeric identifier for a land parcel, house, building or other
   */
  buildingNumber?: string;

  /**
   * The city name
   */
  city?: string;

  /**
   * The complement (like apartment number)
   */
  complement?: string;
  contactInfo?: AddressContactInfoManage;

  /**
   * The country, represented as 2-letter, uppercase, ISO 3166-1 code
   */
  country?: string;

  /**
   * Indicates whether this is the default address for the user
   */
  defaultAddress?: boolean;

  /**
   * Whether this address should be hidden for other users
   */
  hidden?: boolean;

  /**
   * The geolocation of the current address
   */
  location?: GeographicalCoordinate;

  /**
   * The address name
   */
  name?: string;

  /**
   * The neighborhood name
   */
  neighborhood?: string;

  /**
   * The post-office box, is an uniquely addressable box
   */
  poBox?: string;

  /**
   * The region or state
   */
  region?: string;

  /**
   * The street name
   */
  street?: string;

  /**
   * A zip code that identifies a specific geographic (postal) delivery area
   */
  zip?: string;
}
