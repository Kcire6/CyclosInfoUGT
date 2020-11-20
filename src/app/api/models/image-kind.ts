/* tslint:disable */

/**
 * Determines the kind of an image
 * Possible values are:
 * - `contactInfo`: An image of an additional contact information
 * - `customFieldValue`: An image used as custom field value
 * - `identityProvider`: An external identity provider
 * - `marketplace`: Advertisement images are associated with an advertisement, be it simple or for web shop.
 * - `marketplaceCategory`: An image of an advertisement (simple or webshop)
 * - `oidcClient`: An OpenID Connect client
 * - `profile`: User profile images are those associated with the user profile. The first profile image is used to depict the user on search results.
 * - `systemCustom`: System custom images are additional images an administrator that can be used on rich text contents.
 * - `temp`: A temporary image which can upload for later associating with an entity being registered (for example, user or advertisement).
 * - `userCustom`: User custom images are additional images that can be used on rich text contents.
 * - `voucherType`: An image of a voucher type
 */
export enum ImageKind {
  CONTACT_INFO = 'contactInfo',
  CUSTOM_FIELD_VALUE = 'customFieldValue',
  IDENTITY_PROVIDER = 'identityProvider',
  MARKETPLACE = 'marketplace',
  MARKETPLACE_CATEGORY = 'marketplaceCategory',
  OIDC_CLIENT = 'oidcClient',
  PROFILE = 'profile',
  SYSTEM_CUSTOM = 'systemCustom',
  TEMP = 'temp',
  USER_CUSTOM = 'userCustom',
  VOUCHER_TYPE = 'voucherType'
}
