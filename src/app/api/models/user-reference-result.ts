/* tslint:disable */
import { Reference } from './reference';
import { ReferenceDirectionEnum } from './reference-direction-enum';
import { User } from './user';

/**
 * Result of searching references of a given user
 */
export interface UserReferenceResult extends Reference {

  /**
   * Whether this reference was given to or received from the user specified in the path variable.
   */
  direction?: ReferenceDirectionEnum;

  /**
   * The user that either gave to or received from the user specified in the path variable.
   */
  relatedUser?: User;
}
