/* tslint:disable */
import { AddressConfigurationForUserProfile } from './address-configuration-for-user-profile';
import { AddressEditWithId } from './address-edit-with-id';
import { ContactInfoBinaryValuesForUserProfile } from './contact-info-binary-values-for-user-profile';
import { ContactInfoConfigurationForUserProfile } from './contact-info-configuration-for-user-profile';
import { ContactInfoEditWithId } from './contact-info-edit-with-id';
import { CustomFieldBinaryValues } from './custom-field-binary-values';
import { Image } from './image';
import { ImageConfigurationForUserProfile } from './image-configuration-for-user-profile';
import { PasswordInput } from './password-input';
import { PhoneConfigurationForUserProfile } from './phone-configuration-for-user-profile';
import { PhoneEditWithId } from './phone-edit-with-id';
import { UserDataForEdit } from './user-data-for-edit';
import { UserEdit } from './user-edit';

/**
 * Contains data for editing the full profile of a user
 */
export interface DataForEditFullProfile {

  /**
   * Values for images and binary custom fields for address contact infos, keyed by address id.
   */
  addressBinaryValues?: { [key: string]: CustomFieldBinaryValues };
  addressConfiguration?: AddressConfigurationForUserProfile;

  /**
   * The existing addresses that can be modified and posted back
   */
  addresses?: Array<AddressEditWithId>;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * Values for images and binary custom fields for additional contacts, keyed by contact info id.
   */
  contactInfoBinaryValues?: { [key: string]: ContactInfoBinaryValuesForUserProfile };
  contactInfoConfiguration?: ContactInfoConfigurationForUserProfile;

  /**
   * The existing additional contacts that can be modified and posted back
   */
  contactInfos?: Array<ContactInfoEditWithId>;

  /**
   * Use `userConfiguration.details.display` instead.
   *
   *
   * Contains the formatting of the user according to the configuration. Is only returned if no profile fields are marked to return in user list.
   *
   * @deprecated
   */
  display?: string;
  imageConfiguration?: ImageConfigurationForUserProfile;

  /**
   * All current user images
   */
  images?: Array<Image>;

  /**
   * The existing land-line phones that can be modified and posted back
   */
  landLinePhones?: Array<PhoneEditWithId>;

  /**
   * The existing mobile phones that can be modified and posted back
   */
  mobilePhones?: Array<PhoneEditWithId>;
  phoneConfiguration?: PhoneConfigurationForUserProfile;

  /**
   * Use `userConfiguration.details.shortDisplay` instead.
   *
   *
   * Contains the short formatting of the user according to the configuration. Is only returned if no profile fields are marked to return in user list
   *
   * @deprecated
   */
  shortDisplay?: string;
  user?: UserEdit;
  userConfiguration?: UserDataForEdit;
}
