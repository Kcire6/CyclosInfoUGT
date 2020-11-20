/* tslint:disable */
import { Address } from './address';
import { AddressConfiguration } from './address-configuration';
import { DeliveryMethod } from './delivery-method';
import { PasswordInput } from './password-input';
import { ShoppingCartView } from './shopping-cart-view';
import { TransferType } from './transfer-type';

/**
 * Confiugration data need to check-out a shopping cart.
 */
export interface ShoppingCartDataForCheckout {
  addressConfiguration?: AddressConfiguration;

  /**
   * The addresses the logged user (i.e the buyer) has.
   */
  addresses?: Array<Address>;

  /**
   * The cart containing the currency and items.
   */
  cart?: ShoppingCartView;

  /**
   * If a confirmation password is used, contains the definitions on how to request that password from the user. This confirmation password is required when performing sensible actions. Sometimes this is dynamic, for example, the confirmation might be configured to be used only once per session, or operations like payments may have a limit per day to be without confirmation (pinless).
   */
  confirmationPasswordInput?: PasswordInput;

  /**
   * The list of delivery method commons to all of the products added to the shopping cart ordered by name.
   */
  deliveryMethods?: Array<DeliveryMethod>;

  /**
   * Contains the allowed payment types.
   */
  paymentTypes?: Array<TransferType>;
}
