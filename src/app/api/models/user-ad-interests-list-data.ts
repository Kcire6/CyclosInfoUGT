/* tslint:disable */
import { AdInterest } from './ad-interest';
import { User } from './user';

/**
 * Contains, besides the user's advertisement interests, additional data for its management
 */
export interface UserAdInterestsListData {

  /**
   * The advertisement interests list
   */
  adInterests?: Array<AdInterest>;

  /**
   * Indicates whether the authenticated user can create a new ad interest
   */
  canCreate?: boolean;

  /**
   * Indicates whether the advertisement interests can be edited by the authenticated user
   */
  canEdit?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Indicates whether the advertisement interests can be managed by the authenticated user
   *
   * @deprecated
   */
  canManage?: boolean;

  /**
   * The user which owns this advertisement interests
   */
  user?: User;
}
