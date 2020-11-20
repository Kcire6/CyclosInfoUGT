/* tslint:disable */
import { User } from './user';
import { UserStatusEnum } from './user-status-enum';
import { UserStatusLog } from './user-status-log';

/**
 * Contains the current user status, as well as other information
 */
export interface UserStatusData {

  /**
   * Contains the history entries for all status changes
   */
  history?: Array<UserStatusLog>;

  /**
   * If the authenticated user can manage the given user's status, contains the list of statuses that can be assigned.
   */
  possibleNewStatuses?: Array<UserStatusEnum>;
  status?: UserStatusEnum;
  user?: User;
}
