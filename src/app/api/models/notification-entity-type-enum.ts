/* tslint:disable */

/**
 * The type of the entity referenced by the notification, if any.
 * Possible values are:
 * - `adQuestion`: The entity is an advertisement question
 * - `errorLog`: The entity is an error log
 * - `feedback`: The entity is a transaction feedback
 * - `installment`: The entity is a scheduled payment installment
 * - `marketplace`: The entity is a `simple` or `webshop` advertisement
 * - `network`: The entity is a network
 * - `occurrence`: The entity is a failed occurrence of a recurring payment
 * - `order`: The entity is an order
 * - `passwordType`: The entity is a password type
 * - `reference`: The entity is an user reference
 * - `systemAlert`: The entity is a system alert
 * - `token`: The entity is a token (user identification)
 * - `transaction`: The entity is a transaction
 * - `transfer`: The entity is a transfer
 * - `user`: The entity is an user
 * - `userAlert`: The entity is an user alert
 * - `userImportedFile`: The entity is an user imported file
 * - `voucher`: The entity is a voucher
 * - `voucherType`: The entity is a voucher type
 */
export enum NotificationEntityTypeEnum {
  AD_QUESTION = 'adQuestion',
  ERROR_LOG = 'errorLog',
  FEEDBACK = 'feedback',
  INSTALLMENT = 'installment',
  MARKETPLACE = 'marketplace',
  NETWORK = 'network',
  OCCURRENCE = 'occurrence',
  ORDER = 'order',
  PASSWORD_TYPE = 'passwordType',
  REFERENCE = 'reference',
  SYSTEM_ALERT = 'systemAlert',
  TOKEN = 'token',
  TRANSACTION = 'transaction',
  TRANSFER = 'transfer',
  USER = 'user',
  USER_ALERT = 'userAlert',
  USER_IMPORTED_FILE = 'userImportedFile',
  VOUCHER = 'voucher',
  VOUCHER_TYPE = 'voucherType'
}
