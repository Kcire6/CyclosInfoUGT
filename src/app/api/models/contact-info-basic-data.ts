/* tslint:disable */
import { Address } from './address';
import { CustomFieldDetailed } from './custom-field-detailed';
import { PasswordInput } from './password-input';
import { PhoneConfiguration } from './phone-configuration';
import { User } from './user';

/**
 * Contains data shared by both ContactInfoDataForNew and ContactInfoDataForEdit
 */
export interface ContactInfoBasicData {

  /**
   * The available user addresses, which can be referenced by id
   */
  addresses?: Array<Address>;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * The additional contact information custom fields
   */
  customFields?: Array<CustomFieldDetailed>;
  phoneConfiguration?: PhoneConfiguration;

  /**
   * The user which owns the contact info
   */
  user?: User;
}
