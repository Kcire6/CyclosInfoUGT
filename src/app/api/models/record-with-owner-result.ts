/* tslint:disable */
import { RecordResult } from './record-result';
import { User } from './user';

/**
 * Results for a shared record search, containing the owner user as well
 */
export interface RecordWithOwnerResult extends RecordResult {

  /**
   * The record owner
   */
  user?: User;
}
