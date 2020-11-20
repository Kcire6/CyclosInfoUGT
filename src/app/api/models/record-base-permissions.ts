/* tslint:disable */
import { RecordType } from './record-type';

/**
 * Basic definitions shared by `OwnerRecordPermissions` and `BaseRecordDataForSearch`
 */
export interface RecordBasePermissions {

  /**
   * Can the authenticated user create new records of this type?
   */
  create?: boolean;

  /**
   * Can the authenticated user edit records of this type?
   */
  edit?: boolean;

  /**
   * Can the authenticated user remove records of this type?
   */
  remove?: boolean;
  type?: RecordType;
}
