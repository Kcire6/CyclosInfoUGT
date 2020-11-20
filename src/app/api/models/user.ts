/* tslint:disable */
import { Entity } from './entity';
import { Image } from './image';

/**
 * Basic representation of a user (both admin and regular)
 */
export interface User extends Entity {

  /**
   * Contains the formatting of the user according to the configuration. When this object is in the search result, this is only returned if no profile fields are marked to return in user list.
   */
  display?: string;

  /**
   * The primary user profile image
   */
  image?: Image;

  /**
   * The short display was originally meant for SMS only. Will be removed in Cyclos 4.15 with no replacement.
   *
   *
   * Contains the optional short formatting of the user according to the configuration. When not defined, the value is not sent. When this object is in the search result, this is only returned if no profile fields are marked to return in user list.
   *
   * @deprecated
   */
  shortDisplay?: string;

  /**
   * Is the operator owner, only returned if this user represents an operator. Even so, in some cases, like searching for operators of a specific user, this field may not be returned.
   */
  user?: User;
}
