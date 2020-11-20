/* tslint:disable */
import { Reference } from './reference';
import { User } from './user';

/**
 * Details of a reference
 */
export interface ReferenceView extends Reference {

  /**
   * Can the authenticated user edit this reference?
   */
  canEdit?: boolean;

  /**
   * The user that gave the reference
   */
  from?: User;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user manage this reference?
   *
   * @deprecated
   */
  manage?: boolean;

  /**
   * The user that received the reference
   */
  to?: User;
}
