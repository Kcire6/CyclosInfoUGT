/* tslint:disable */

/**
 * The possible targets for a temporary image
 * Possible values are:
 * - `advertisement`: The image will be used for an advertisement of a specific user
 * - `contactInfo`: The image will be used for an additional contact information of a specific user
 * - `customValue`: The image will be used for a value of a specific custom field
 * - `userProfile`: The image will be used as a profile image for an existing user
 * - `userRegistration`: The image will be used as a profile image for a newly registered user
 */
export enum TempImageTargetEnum {
  ADVERTISEMENT = 'advertisement',
  CONTACT_INFO = 'contactInfo',
  CUSTOM_VALUE = 'customValue',
  USER_PROFILE = 'userProfile',
  USER_REGISTRATION = 'userRegistration'
}
