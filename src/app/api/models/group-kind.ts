/* tslint:disable */

/**
 * The possible kinds of group or group set
 * Possible values are:
 * - `adminGroup`: An administrator group
 * - `brokerGroup`: A broker group
 * - `groupSet`: A group set
 * - `memberGroup`: A member (regular user) group
 */
export enum GroupKind {
  ADMIN_GROUP = 'adminGroup',
  BROKER_GROUP = 'brokerGroup',
  GROUP_SET = 'groupSet',
  MEMBER_GROUP = 'memberGroup'
}
