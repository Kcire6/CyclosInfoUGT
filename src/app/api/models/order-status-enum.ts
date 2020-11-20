/* tslint:disable */

/**
 * The possible statuses for an order
 * Possible values are:
 * - `completed`: The order was accepted by the seller and/or buyer and the related payment was done.
 * - `disposed`: The order was marked as disposed because the seller and/or buyer were removed or they do not have any account in the order's currency.
 * - `draft`: The order has been created by the seller, but has not yet been sent to the buyer for approval
 * - `paymentCanceled`: The related payment was not done because was canceled after finish the authorization process.
 * - `paymentDenied`: The related payment was not done because was denied.
 * - `paymentExpired`: The related payment was not done because the pending authorization has expired.
 * - `paymentPending`: The order was accepted by the seller and/or buyer and the related payment is waiting for authorization.
 * - `pendingBuyer`: The order is pending by the buyer's action.
 * - `pendingSeller`: The order is pending by the seller's action.
 * - `rejectedByBuyer`: The order was rejected by the buyer.
 * - `rejectedBySeller`: The order was rejected by the seller.
 * - `shoppingCart`: The order is just a shopping cart, possibly temporary, as hasn't been checked out yet
 */
export enum OrderStatusEnum {
  COMPLETED = 'completed',
  DISPOSED = 'disposed',
  DRAFT = 'draft',
  PAYMENT_CANCELED = 'paymentCanceled',
  PAYMENT_DENIED = 'paymentDenied',
  PAYMENT_EXPIRED = 'paymentExpired',
  PAYMENT_PENDING = 'paymentPending',
  PENDING_BUYER = 'pendingBuyer',
  PENDING_SELLER = 'pendingSeller',
  REJECTED_BY_BUYER = 'rejectedByBuyer',
  REJECTED_BY_SELLER = 'rejectedBySeller',
  SHOPPING_CART = 'shoppingCart'
}
