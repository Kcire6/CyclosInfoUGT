/* tslint:disable */

/**
 * Mediums used to send information to the user (e.g: a confirmation code)
 * Possible values are:
 * - `email`: The user will receive an email with the information
 * - `sms`: The user will receive a sms with the information (only if there is at least one phone enabled for sms)
 */
export enum SendMediumEnum {
  EMAIL = 'email',
  SMS = 'sms'
}
