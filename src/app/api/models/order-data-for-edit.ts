/* tslint:disable */
import { Currency } from './currency';
import { OrderBasicData } from './order-basic-data';
import { OrderEdit } from './order-edit';
import { OrderStatusEnum } from './order-status-enum';
import { WebshopAd } from './webshop-ad';

/**
 * Data for edit an order as the seller
 */
export interface OrderDataForEdit extends OrderBasicData {

  /**
   * Can the authenticated user edit this order?
   */
  canEdit?: boolean;

  /**
   * Can the authenticated user remove this order?
   */
  canRemove?: boolean;

  /**
   * The creation date when the order was saved for first time
   */
  creationDate?: string;
  currency?: Currency;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit this order?
   *
   * @deprecated
   */
  edit?: boolean;

  /**
   * The list of product items added to the order
   */
  items?: Array<WebshopAd>;

  /**
   * The generated order number according to the webshop settings.
   */
  number?: string;

  /**
   * The order that is being edited
   */
  order?: OrderEdit;

  /**
   * Use `canRemove` instead.
   *
   *
   * Can the authenticated user remove this order?
   *
   * @deprecated
   */
  remove?: boolean;
  status?: OrderStatusEnum;
}
