/* tslint:disable */
import { DeliveryMethod } from './delivery-method';
import { User } from './user';

/**
 * Contains, besides the user's delivery methods, additional data for its management
 */
export interface UserDeliveryMethodsListData {

  /**
   * Indicates whether the authenticated user can create a new delivery method this user
   */
  canCreate?: boolean;

  /**
   * Indicates whether the delivery methods can be edited by the authenticated user
   */
  canEdit?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Indicates whether the delivery methods can be managed by the authenticated user
   *
   * @deprecated
   */
  canManage?: boolean;

  /**
   * The delivery methods list
   */
  deliveryMethods?: Array<DeliveryMethod>;
  user?: User;
}
