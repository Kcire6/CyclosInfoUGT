/* tslint:disable */
import { PhoneEdit } from './phone-edit';

/**
 * Parameters for editing an existing phone
 */
export interface PhoneEditWithId extends PhoneEdit {

  /**
   * The internal entity identifier
   */
  id?: string;
}
