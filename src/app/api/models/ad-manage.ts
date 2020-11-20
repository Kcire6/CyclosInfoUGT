/* tslint:disable */
import { DatePeriod } from './date-period';

/**
 * Common fields for either creating or editing a simple or webshop advertisement
 */
export interface AdManage {

  /**
   * Ids of the public addresses (belonging to the advertisement owner) this advertisement is available at.
   */
  addresses?: Array<string>;

  /**
   * Whether a decimal quantity of this webshop can be added to the shopping cart or not.
   */
  allowDecimalQuantity?: boolean;

  /**
   * Either internal name or id of categories this advertisement belongs to. In most cases an advertisement will have a single category, but this depends on the Cyclos configuration.
   */
  categories?: Array<string>;

  /**
   * Either internal name or id of the advertisement's price currency
   */
  currency?: string;

  /**
   * Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type. Example: `{..., "customValues": {"gender": "male", "birthDate": "1980-10-27"}}`
   */
  customValues?: { [key: string]: string };

  /**
   * Ids of delivery method (belonging to the advertisement owner) this advertisement has allowed.
   */
  deliveryMethods?: Array<string>;

  /**
   * The advertisement description content, formatted as HTML
   */
  description?: string;

  /**
   * Maximum quantity allowed in a shopping cart. Only for webshop.
   */
  maxAllowedInCart?: string;

  /**
   * Minimum quantity allowed in a shopping cart. Only for webshop.
   */
  minAllowedInCart?: string;

  /**
   * Reached this minimum limit a notification will be sent to the user indicating there is low stock for this webshop. Only for webshop.
   */
  minStockQuantityToNotify?: string;

  /**
   * The advertisement title
   */
  name?: string;

  /**
   * The regular price
   */
  price?: string;

  /**
   * The unique number assigned to this webshop. Required if it's not marked as generated in the user webshop settings. Only for webshop.
   */
  productNumber?: string;

  /**
   * The promotional period, the one when `promotionalPrice` is valid
   */
  promotionalPeriod?: DatePeriod;

  /**
   * The promotional price, if any
   */
  promotionalPrice?: string;
  publicationPeriod?: DatePeriod;

  /**
   * The quantity in stock (if `unlimitedStock` is false). Only for webshop.
   */
  stockQuantity?: string;

  /**
   * Whether the stock is unlimited or not. If true then it means there is always disponibility of the webshop and the `stockQuantity` and `minStockQuantityToNotify` are meaningless.
   */
  unlimitedStock?: boolean;
}
