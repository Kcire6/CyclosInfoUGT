/* tslint:disable */

/**
 * Permissions over contacts
 */
export interface ContactsPermissions {

  /**
   * Permission to own a contact list.
   */
  enable?: boolean;

  /**
   * Permission to manage contacts custom fields.
   */
  hasEditableFields?: boolean;

  /**
   * Permission to view contacts custom fields.
   */
  hasVisibleFields?: boolean;
}
