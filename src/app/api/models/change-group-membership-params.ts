/* tslint:disable */

/**
 * Parameters for changing a user / operator group
 */
export interface ChangeGroupMembershipParams {

  /**
   * Comments for this group change
   */
  comment?: string;

  /**
   * The new group id or internal name
   */
  group?: string;
}
