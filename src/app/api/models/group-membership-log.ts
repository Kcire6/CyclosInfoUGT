/* tslint:disable */
import { DatePeriod } from './date-period';
import { Group } from './group';
import { User } from './user';

/**
 * Information regarding a specific group membership change
 */
export interface GroupMembershipLog {
  by?: User;

  /**
   * Comments supplied by the manager that performed the group change
   */
  comment?: string;
  group?: Group;

  /**
   * The begin and end date the for this group. The current group has no end date.
   */
  period?: DatePeriod;
}
