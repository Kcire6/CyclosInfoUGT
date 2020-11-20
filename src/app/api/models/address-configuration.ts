/* tslint:disable */
import { AddressFieldEnum } from './address-field-enum';

/**
 * Contains configuration information related to addresses
 */
export interface AddressConfiguration {

  /**
   * Contains the address fields that are enabled in Cyclos
   */
  enabledFields?: Array<AddressFieldEnum>;

  /**
   * Contains the address fields that are required in Cyclos
   */
  requiredFields?: Array<AddressFieldEnum>;

  /**
   * Indicates whether maps are enabled in Cyclos
   */
  useMap?: boolean;
}
