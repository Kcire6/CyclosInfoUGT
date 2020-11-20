/* tslint:disable */

/**
 * Contains the common fields for either creating or modifying a user / operator
 */
export interface BasicUserManage {

  /**
   * Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type. In order to lookup the custom fields, use either the `GET /users/data-for-new` (when creating) or `GET /users/{user}/data-for-edit` (when modifying) a user, and lookup each field by either internal name. Example: `{..., "customValues": {"gender": "male", "birthDate": "1980-10-27"}}`
   */
  customValues?: { [key: string]: string };

  /**
   * The user's e-mail
   */
  email?: string;

  /**
   * The user's full name
   */
  name?: string;

  /**
   * The user's login name
   */
  username?: string;
}
