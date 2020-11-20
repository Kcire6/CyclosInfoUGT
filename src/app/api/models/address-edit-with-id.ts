/* tslint:disable */
import { AddressEdit } from './address-edit';

/**
 * Parameters for editing an existing address
 */
export interface AddressEditWithId extends AddressEdit {

  /**
   * The internal entity identifier
   */
  id?: string;
}
