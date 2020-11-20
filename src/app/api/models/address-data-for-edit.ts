/* tslint:disable */
import { AddressBasicData } from './address-basic-data';
import { AddressEdit } from './address-edit';

/**
 * Contains data for editing an existing address
 */
export interface AddressDataForEdit extends AddressBasicData {

  /**
   * The address that is being edited. This value can be modified and sent back on `PUT /addresses/{id}`.
   */
  address?: AddressEdit;

  /**
   * Can the authenticated user edit this address?
   */
  canEdit?: boolean;

  /**
   * Can the authenticated user remove this address?
   */
  canRemove?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit this address?
   *
   * @deprecated
   */
  edit?: boolean;

  /**
   * Use `canRemove` instead.
   *
   *
   * Can the authenticated user remove this address?
   *
   * @deprecated
   */
  remove?: boolean;
}
