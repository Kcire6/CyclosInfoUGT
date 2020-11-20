/* tslint:disable */

/**
 * Permissions regarding the documents of a given user
 */
export interface UserDocumentsPermissions {

  /**
   * The number of documents for this user
   */
  count?: number;

  /**
   * Can the authenticated user view the documents of this user?
   */
  view?: boolean;
}
