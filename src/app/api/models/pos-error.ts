/* tslint:disable */
import { Error } from './error';
import { PosErrorCode } from './pos-error-code';

/**
 * Error when performing a POS operation
 */
export interface PosError extends Error {
  code?: PosErrorCode;
}
