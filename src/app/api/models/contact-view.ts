/* tslint:disable */
import { Contact } from './contact';
import { CustomFieldValue } from './custom-field-value';
import { Operation } from './operation';
import { User } from './user';

/**
 * Detailed information when viewing a contact
 */
export interface ContactView extends Contact {

  /**
   * Can the authenticated user edit this contact?
   */
  canEdit?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user manage this contact?
   *
   * @deprecated
   */
  canManage?: boolean;

  /**
   * The list of custom field values this contact has
   */
  customValues?: Array<CustomFieldValue>;

  /**
   * List of runnable custom operations.
   */
  operations?: Array<Operation>;

  /**
   * Use `user` instead.
   *
   *
   * The user which owns this contact
   *
   * @deprecated
   */
  owner?: User;

  /**
   * The user which owns this contact
   */
  user?: User;
}
