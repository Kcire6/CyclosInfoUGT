/* tslint:disable */
import { Ad } from './ad';
import { AdStatusEnum } from './ad-status-enum';

/**
 * Contains shared information of an ad.
 */
export interface BaseAdDetailed extends Ad {

  /**
   * The regular price.
   */
  price?: string;

  /**
   * The product number according to the webshop settings.
   */
  productNumber?: string;
  status?: AdStatusEnum;
}
