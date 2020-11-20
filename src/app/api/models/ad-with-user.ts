/* tslint:disable */
import { Ad } from './ad';
import { User } from './user';

/**
 * An advertisement with information about its owner
 */
export interface AdWithUser extends Ad {

  /**
   * The user who owns this advertisement
   */
  user?: User;
}
