/* tslint:disable */
import { Record } from './record';
import { User } from './user';

/**
 * Contains data returned when searching for records
 */
export interface RecordResult extends Record {
  createdBy?: User;

  /**
   * The record creation date
   */
  creationDate?: string;

  /**
   * Holds the values for custom record fields, keyed by field internal name
   */
  customValues?: { [key: string]: string };

  /**
   * The record last modification date
   */
  lastModificationDate?: string;
  lastModifiedBy?: User;
}
