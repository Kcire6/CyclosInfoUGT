/* tslint:disable */
import { PhoneBasicData } from './phone-basic-data';
import { PhoneEdit } from './phone-edit';

/**
 * Contains data for editing an existing phone
 */
export interface PhoneDataForEdit extends PhoneBasicData {

  /**
   * Can the authenticated user edit this phone?
   */
  canEdit?: boolean;

  /**
   * Can the authenticated user remove this phone?
   */
  canRemove?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit this phone?
   *
   * @deprecated
   */
  edit?: boolean;

  /**
   * The phone that is being edited. This value can be modified and sent back on `PUT /phones/{id}`.
   */
  phone?: PhoneEdit;

  /**
   * Use `canRemove` instead.
   *
   *
   * Can the authenticated user remove this phone?
   *
   * @deprecated
   */
  remove?: boolean;
}
