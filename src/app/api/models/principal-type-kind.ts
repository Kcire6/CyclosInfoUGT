/* tslint:disable */

/**
 * The kind of a principal type (user identification method)
 * Possible values are:
 * - `accessClient`: An access client token (remote application) identifies the user
 * - `accountNumber`: An account number identifies the user
 * - `customField`: A unique custom field identifies the user
 * - `email`: The email identifies the user
 * - `mobilePhone`: A mobile phone number identifies the user
 * - `token`: A token identifies the user
 * - `trustedDevice`: A trusted device identifies the user
 * - `username`: The username identifies the user
 */
export enum PrincipalTypeKind {
  ACCESS_CLIENT = 'accessClient',
  ACCOUNT_NUMBER = 'accountNumber',
  CUSTOM_FIELD = 'customField',
  EMAIL = 'email',
  MOBILE_PHONE = 'mobilePhone',
  TOKEN = 'token',
  TRUSTED_DEVICE = 'trustedDevice',
  USERNAME = 'username'
}
