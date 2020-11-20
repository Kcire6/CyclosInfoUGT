/* tslint:disable */
import { RecordPermissions } from './record-permissions';

/**
 * Permissions over own or system records
 */
export interface RecordsPermissions {

  /**
   * Permissions over each visible system record type.
   */
  system?: Array<RecordPermissions>;

  /**
   * Permissions over each visible own user record type.
   */
  user?: Array<RecordPermissions>;

  /**
   * Permissions over each visible user record type of managed users.
   */
  userManagement?: Array<RecordPermissions>;
}
