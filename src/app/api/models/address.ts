/* tslint:disable */
import { AddressContactInfo } from './address-contact-info';
import { GeographicalCoordinate } from './geographical-coordinate';
import { NamedEntity } from './named-entity';

/**
 * An address reference. The actually used fields depend on the user configuration
 */
export interface Address extends NamedEntity {

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
  contactInfo?: AddressContactInfo;

  /**
   * The country, represented as 2-letter, uppercase, ISO 3166-1 code
   */
  country?: string;

  /**
   * The geolocation of the current address
   */
  location?: GeographicalCoordinate;

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
