/* tslint:disable */

/**
 * Determines the kind of an user image
 * Possible values are:
 * - `custom`: User custom images are additional images that can be used on rich text contents.
 * - `profile`: User profile images are those associated with the user profile. The first profile image is used to depict the user on search results.
 */
export enum UserImageKind {
  CUSTOM = 'custom',
  PROFILE = 'profile'
}
