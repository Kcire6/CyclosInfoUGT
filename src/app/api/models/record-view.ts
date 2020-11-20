/* tslint:disable */
import { Operation } from './operation';
import { Record } from './record';
import { RecordCustomFieldValue } from './record-custom-field-value';
import { RecordTypeDetailed } from './record-type-detailed';
import { User } from './user';

/**
 * Detailed information when viewing a record
 */
export interface RecordView extends Record {

  /**
   * Can the authenticated user edit this record?
   */
  canEdit?: boolean;

  /**
   * Can the authenticated user remove this record?
   */
  canRemove?: boolean;
  createdBy?: User;

  /**
   * The record creation date
   */
  creationDate?: string;

  /**
   * The list of custom field values this record has
   */
  customValues?: Array<RecordCustomFieldValue>;

  /**
   * Use `canEdit` instead.
   *
   *
   * Can the authenticated user edit this record?
   *
   * @deprecated
   */
  edit?: boolean;

  /**
   * The record last modification date
   */
  lastModificationDate?: string;
  lastModifiedBy?: User;

  /**
   * List of runnable custom operations.
   */
  operations?: Array<Operation>;

  /**
   * Use `canRemove` instead.
   *
   *
   * Can the authenticated user remove this record?
   *
   * @deprecated
   */
  remove?: boolean;
  type?: RecordTypeDetailed;

  /**
   * The user which owns this record, only returned if `kind` is `user`
   */
  user?: User;
}
