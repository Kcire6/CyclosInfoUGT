/* tslint:disable */

/**
 * Determines the allowed actions over a given profile field
 */
export interface ProfileFieldActions {

  /**
   * Can the authenticated user edit this field?
   */
  edit?: boolean;

  /**
   * Can the authenticated user manage the privacy for this field?
   */
  managePrivacy?: boolean;
}
