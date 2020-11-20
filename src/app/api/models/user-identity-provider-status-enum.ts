/* tslint:disable */

/**
 * The status of a link between a user and an identity provider
 * Possible values are:
 * - `disabled`: The identity provider is disabled for the user, which means that the login with external provider will not work even if the user has the same e-mail address in the provider and in Cyclos.
 * - `linked`: The identity provider is linked to the user
 * - `notLinked`: The identity provider is not currently linked with the user
 */
export enum UserIdentityProviderStatusEnum {
  DISABLED = 'disabled',
  LINKED = 'linked',
  NOT_LINKED = 'notLinked'
}
