/* tslint:disable */
import { OperatorGroupBasicData } from './operator-group-basic-data';
import { OperatorGroupEdit } from './operator-group-edit';
import { User } from './user';

/**
 * Contains data for editing an existing operator group
 */
export interface OperatorGroupDataForEdit extends OperatorGroupBasicData {

  /**
   * Can the authenticated user edit this operator group?
   */
  canEdit?: boolean;

  /**
   * Can the authenticated user remove this operator group?
   */
  canRemove?: boolean;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit this operator group?
   *
   * @deprecated
   */
  edit?: boolean;

  /**
   * The operator group that is being edited. This value can be modified and sent back on `PUT /operator-groups/{id}`.
   */
  operatorGroup?: OperatorGroupEdit;

  /**
   * Use `canRemove` instead.
   *
   *
   * Can the authenticated user remove this operator group?
   *
   * @deprecated
   */
  remove?: boolean;

  /**
   * Details of the currently set users in the `restrictPaymentsToUsers` property in `operatorGroup` (which have only the ids).
   */
  restrictPaymentsToUsers?: Array<User>;
}
