/* tslint:disable */
import { DeliveryMethodBasicData } from './delivery-method-basic-data';
import { DeliveryMethodEdit } from './delivery-method-edit';

/**
 * Contains data for editing an exinsting webshop delivery method
 */
export interface DeliveryMethodDataForEdit extends DeliveryMethodBasicData {

  /**
   * Can the authenticated user edit this delivery method?
   */
  canEdit?: boolean;

  /**
   * Can the authenticated user remove this delivery method?
   */
  canRemove?: boolean;

  /**
   * The delivery method populated with the current fields. This value can be modified and sent back on `PUT /delivery-methods/{id}`.
   */
  deliveryMethod?: DeliveryMethodEdit;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit this delivery method?
   *
   * @deprecated
   */
  edit?: boolean;

  /**
   * Use `canRemove` instead.
   *
   *
   * Can the authenticated user remove this delivery method?
   *
   * @deprecated
   */
  remove?: boolean;
}
