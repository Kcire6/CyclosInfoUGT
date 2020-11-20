/* tslint:disable */
import { ConflictErrorCode } from './conflict-error-code';

/**
 * Error returned when there was a conflict with some expected status vs the actual database status
 */
export interface ConflictError {
  code?: ConflictErrorCode;
}
