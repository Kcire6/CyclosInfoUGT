/* tslint:disable */
import { DatePeriod } from './date-period';
import { User } from './user';
import { UserStatusEnum } from './user-status-enum';

/**
 * Information regarding a specific status change
 */
export interface UserStatusLog {
  by?: User;

  /**
   * Comments supplied by the manager that performed the status change
   */
  comment?: string;

  /**
   * The begin and end date the for this status. The current status has no end date.
   */
  period?: DatePeriod;
  status?: UserStatusEnum;
}
