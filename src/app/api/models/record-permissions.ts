/* tslint:disable */
import { RecordBasePermissions } from './record-base-permissions';

/**
 * Permissions over own records of a given type
 */
export interface RecordPermissions extends RecordBasePermissions {

  /**
   * Use `singleRecordId` property
   *
   *
   * If the record type `layout` is  `single` this property contains the identifier of the existing record (if any) of this type.
   *
   * @deprecated
   */
  singleId?: string;

  /**
   * If this record type layout is single, and the record exists, contains its identifier
   */
  singleRecordId?: string;

  /**
   * Use `edit` property
   *
   *
   * Can update records of this type?
   *
   * @deprecated
   */
  update?: boolean;
}
