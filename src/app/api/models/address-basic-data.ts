/* tslint:disable */
import { AddressConfiguration } from './address-configuration';
import { CustomFieldDetailed } from './custom-field-detailed';
import { PasswordInput } from './password-input';
import { PhoneConfiguration } from './phone-configuration';
import { User } from './user';

/**
 * Contains data shared by both AddressDataForNew and AddressDataForEdit
 */
export interface AddressBasicData extends AddressConfiguration {

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * Can the address have additional contact information fields?
   */
  contactInfoEnabled?: boolean;

  /**
   * The additional contact information custom fields. Only returned if `contactInfoEnabled` is true.
   */
  contactInfoFields?: Array<CustomFieldDetailed>;

  /**
   * Indicates whether privacy can be used for this address
   */
  enablePrivacy?: boolean;

  /**
   * Can the authenticated user manage the privacy of this address?
   */
  managePrivacy?: boolean;

  /**
   * Configuration for settings contact phone numbers. Only returned if `contactInfoEnabled` is true.
   */
  phoneConfiguration?: PhoneConfiguration;

  /**
   * The user which owns the address.
   */
  user?: User;
}
