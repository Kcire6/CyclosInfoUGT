/* tslint:disable */

/**
 * Error types associated to the HTTP Status 500
 * Possible values are:
 * - `buyVoucher`: An error has occurred when buying a voucher
 * - `forgottenPassword`: An error has occurred when changing a forgotten password.
 * - `general`: An unexpected error has occurred
 * - `initializeNfc`: An error has occurred when initializing a NFC token
 * - `nested`: An error which has another internal error at a given property / index
 * - `nfcAuth`: An error has occurred when making an external NFC authentication
 * - `otp`: An error has occurred requesting an OTP
 * - `payment`: An error has occurred when making a payment
 * - `personalizeNfc`: An error has occurred when personalizing a NFC token
 * - `pos`: An error has occurred when receiving a payment on a POS operation
 * - `redeemVoucher`: An error has occurred when redeeming a voucher
 * - `shoppingCart`: An error has occurred when interacting with a shopping cart.
 * - `shoppingCartCheckout`: An error has occurred when checking out a shopping cart.
 */
export enum ErrorKind {
  BUY_VOUCHER = 'buyVoucher',
  FORGOTTEN_PASSWORD = 'forgottenPassword',
  GENERAL = 'general',
  INITIALIZE_NFC = 'initializeNfc',
  NESTED = 'nested',
  NFC_AUTH = 'nfcAuth',
  OTP = 'otp',
  PAYMENT = 'payment',
  PERSONALIZE_NFC = 'personalizeNfc',
  POS = 'pos',
  REDEEM_VOUCHER = 'redeemVoucher',
  SHOPPING_CART = 'shoppingCart',
  SHOPPING_CART_CHECKOUT = 'shoppingCartCheckout'
}
