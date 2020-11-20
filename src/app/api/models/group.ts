/* tslint:disable */
import { GroupKind } from './group-kind';
import { InternalNamedEntity } from './internal-named-entity';

/**
 * Contains data of a group
 */
export interface Group extends InternalNamedEntity {

  /**
   * The internal name or id of the group set of this group. Only makes sense if is a user or broker group. Administrator groups or group sets cannot have a group set.
   */
  groupSet?: string;
  kind?: GroupKind;
}
