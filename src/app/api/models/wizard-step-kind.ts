/* tslint:disable */

/**
 * Indicates the type of a custom wizard step
 * Possible values are:
 * - `formFields`: Shows custom wizard fields. In a registration wizard, shows any combination of profile fields, password, captcha, agreements, etc
 * - `group`: In a registration wizard, shows the selection of the group the user will join
 * - `identityProvider`: In a registration wizard, shows the available identity providers for a faster user registration
 */
export enum WizardStepKind {
  FORM_FIELDS = 'formFields',
  GROUP = 'group',
  IDENTITY_PROVIDER = 'identityProvider'
}
