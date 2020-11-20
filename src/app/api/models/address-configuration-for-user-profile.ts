/* tslint:disable */
import { AddressConfiguration } from './address-configuration';
import { AddressNew } from './address-new';
import { AvailabilityEnum } from './availability-enum';
import { CustomFieldDetailed } from './custom-field-detailed';
import { PhoneConfiguration } from './phone-configuration';

/**
 * Contains extended address configuration used on user registration
 */
export interface AddressConfigurationForUserProfile extends AddressConfiguration {

  /**
   * Contains the default values for a new address
   */
  address?: AddressNew;
  availability?: AvailabilityEnum;

  /**
   * Is contact information, such as email, phones and custom values, enabled for addresses of this user?
   */
  contactInfoEnabled?: boolean;

  /**
   * The contact information custom fields for the address. Only sent if `contactInfoEnabled` is true and there are available custom fields.
   */
  contactInfoFields?: Array<CustomFieldDetailed>;

  /**
   * Can edit addresses?
   */
  edit?: boolean;

  /**
   * Can manage the privacy of addresses?
   */
  managePrivacy?: boolean;

  /**
   * The maximum number of addresses the user can own
   */
  maxAddresses?: number;

  /**
   * The phone configuration to set contact phones for the address. Only sent if `contactInfoEnabled` is true.
   */
  phoneConfiguration?: PhoneConfiguration;
}
