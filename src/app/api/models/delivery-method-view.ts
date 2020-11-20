/* tslint:disable */
import { DeliveryMethod } from './delivery-method';
import { User } from './user';

/**
 * Details of a webshop delivery method
 */
export interface DeliveryMethodView extends DeliveryMethod {

  /**
   * Can the authenticated user edit this delivery method?
   */
  canEdit?: boolean;

  /**
   * Can the authenticated user remove this delivery method?
   */
  canRemove?: boolean;

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

  /**
   * The user which owns this delivery method
   */
  user?: User;
}
