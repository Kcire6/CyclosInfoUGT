/* tslint:disable */
import { OrderResult } from './order-result';
import { User } from './user';

/**
 * Data of an order as returned on list associated to an user.
 */
export interface UserOrderResult extends OrderResult {

  /**
   * The other related user, i.e if we're listing the sales of a user then it represents the buyer. Otherwise (purchases) the seller.
   */
  relatedUser?: User;
}
