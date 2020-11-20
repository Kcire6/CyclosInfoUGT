/* tslint:disable */
import { AccountType } from './account-type';
import { Product } from './product';

/**
 * Reference to a product, together with the related user account
 */
export interface ProductWithUserAccount extends Product {
  userAccount?: AccountType;
}
