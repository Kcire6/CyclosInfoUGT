/* tslint:disable */

/**
 * Possible reasons why the link between user and identity provider could not be created
 * Possible values are:
 * - `globalUserNetworkIdpIgnored`: A login from a global administrator together with an identity provider request for an identity provider defined in a network.
 * - `unsupportedPrincipalType`: The user identification method used in the login is not supported for linking. E.g trusted devices are not supported, it's quite strange situation because it means the user choose to login with an identity provider, then the user doesn't match and at the moment of perform the login to Cyclos he/her choose to login with a trusted device. The login with trusted device and with an identity provider both offer the same kind of ease for a quick login the probably the user will choose to login with a trusted device from the beginning.
 * - `userDisabled`: The user has explicitly disabled the identity provider in their settings.
 */
export enum IdentityProviderNotLinkReasonEnum {
  GLOBAL_USER_NETWORK_IDP_IGNORED = 'globalUserNetworkIdpIgnored',
  UNSUPPORTED_PRINCIPAL_TYPE = 'unsupportedPrincipalType',
  USER_DISABLED = 'userDisabled'
}
