/* tslint:disable */
import { Address } from './address';
import { Image } from './image';
import { NamedEntity } from './named-entity';

/**
 * An additional contact information reference
 */
export interface ContactInfo extends NamedEntity {
  address?: Address;

  /**
   * The e-mail for this additional contact information
   */
  email?: string;
  image?: Image;

  /**
   * The landline phone extension for this additional contact information
   */
  landLineExtension?: string;

  /**
   * The formatted landline phone for this additional contact information
   */
  landLinePhone?: string;

  /**
   * The formatted mobile phone for this additional contact information
   */
  mobilePhone?: string;

  /**
   * The land-line phone, normalized to the E.164 format
   */
  normalizedLandLinePhone?: string;

  /**
   * The mobile phone, normalized to the E.164 format
   */
  normalizedMobilePhone?: string;
}
