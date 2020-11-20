/* tslint:disable */
import { EntityReference } from './entity-reference';
import { Group } from './group';
import { GroupMembershipLog } from './group-membership-log';
import { User } from './user';
import { UserStatusEnum } from './user-status-enum';

/**
 * Contains the current user / operator group, as well as other information
 */
export interface GroupMembershipData {
  group?: Group;

  /**
   * List of group sets which can be referenced on groups on either `possibleNewGroups` or `history.group`. Not sent for operators.
   */
  groupSets?: Array<EntityReference>;

  /**
   * Contains the history entries for all group changes
   */
  history?: Array<GroupMembershipLog>;

  /**
   * If the authenticated user can change the user / operator to a new group, contains the list of groups that can be assigned.
   */
  possibleNewGroups?: Array<Group>;
  status?: UserStatusEnum;
  user?: User;
}
