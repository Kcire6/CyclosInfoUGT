/* tslint:disable */
import { RecordPermissions } from './record-permissions';

/**
 * Permissions over a user record for a given owner
 */
export interface OwnerRecordPermissions extends RecordPermissions {

  /**
   * The current number of records of this type for this owner
   */
  count?: number;
}
