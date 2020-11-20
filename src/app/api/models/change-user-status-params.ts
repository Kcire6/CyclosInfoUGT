/* tslint:disable */
import { UserStatusEnum } from './user-status-enum';

/**
 * Parameters for changing a user status
 */
export interface ChangeUserStatusParams {

  /**
   * Comments for this status change
   */
  comment?: string;
  status?: UserStatusEnum;
}
