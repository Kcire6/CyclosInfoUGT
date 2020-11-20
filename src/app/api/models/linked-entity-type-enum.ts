/* tslint:disable */

/**
 * When the type is linkedEntity, indicates the entity type
 * Possible values are:
 * - `advertisement`: An advertisement
 * - `record`: A record (user or system)
 * - `transaction`: A transaction (payment, scheduled payment, payment request, etc)
 * - `transfer`: A transfer
 * - `user`: An user
 */
export enum LinkedEntityTypeEnum {
  ADVERTISEMENT = 'advertisement',
  RECORD = 'record',
  TRANSACTION = 'transaction',
  TRANSFER = 'transfer',
  USER = 'user'
}
