/* tslint:disable */

/**
 * The way an user is identified to either perform or receive a payment
 * Possible values are:
 * - `autocomplete`: The client application should search for an user and pass in the id
 * - `contacts`: The client application should access the contact list of the authenticated user and pass the id
 * - `principalType`: The client application should pass in an identification (principal) of the user, such as login name, e-mail and so on
 */
export enum IdentificationMethodEnum {
  AUTOCOMPLETE = 'autocomplete',
  CONTACTS = 'contacts',
  PRINCIPAL_TYPE = 'principalType'
}
