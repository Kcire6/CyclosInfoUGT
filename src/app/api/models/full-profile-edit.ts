/* tslint:disable */
import { AddressEditWithId } from './address-edit-with-id';
import { AddressNew } from './address-new';
import { ContactInfoEditWithId } from './contact-info-edit-with-id';
import { ContactInfoNew } from './contact-info-new';
import { PhoneEditWithId } from './phone-edit-with-id';
import { PhoneNew } from './phone-new';
import { UserEdit } from './user-edit';

/**
 * Data sent to the server to edit the full profile at once
 */
export interface FullProfileEdit {

  /**
   * Identifiers of previously uploaded temporary images to be added as profile images. If not sent / empty, no images are added.
   */
  addImages?: Array<string>;

  /**
   * Addresses to be created. If not sent / empty, no addresses are created.
   */
  createAddresses?: Array<AddressNew>;

  /**
   * Additional contacts to be created. If not sent / empty, no additional contacts are created.
   */
  createContactInfos?: Array<ContactInfoNew>;

  /**
   * Land-line phones to be created. If not sent / empty, no land-line phones are created.
   */
  createLandLinePhones?: Array<PhoneNew>;

  /**
   * Mobile phones to be created. If not sent / empty, no mobile phones are created.
   */
  createMobilePhones?: Array<PhoneNew>;

  /**
   * Addresses to be modified. If not sent / empty, no addresses are modified.
   */
  modifyAddresses?: Array<AddressEditWithId>;

  /**
   * Additional contacts to be modified. If not sent / empty, no additional contacts are modified.
   */
  modifyContactInfos?: Array<ContactInfoEditWithId>;

  /**
   * Land-line phones to be modified. If not sent / empty, no land-line phones are modified
   */
  modifyLandLinePhones?: Array<PhoneEditWithId>;

  /**
   * Mobile phones to be modified. If not sent / empty, no mobile phones are modified.
   */
  modifyMobilePhones?: Array<PhoneEditWithId>;

  /**
   * Addresses to be removed. If not sent / empty, no addresses are removed.
   */
  removeAddresses?: Array<string>;

  /**
   * Additional contacts to be removed. If not sent / empty, no additional contacts are removed.
   */
  removeContactInfos?: Array<string>;

  /**
   * Identifiers of existing profile images to be removed. If not sent / empty, no images are removed.
   */
  removeImages?: Array<string>;

  /**
   * Phones (both land-line and mobile) to be removed. If not sent / empty, no phones are removed.
   */
  removePhones?: Array<string>;

  /**
   * Identifiers of either existing or added profile images in the order they should be listed.
   */
  reorderImages?: Array<string>;

  /**
   * The basic fields. If null, the fields are not modified
   */
  user?: UserEdit;
}
