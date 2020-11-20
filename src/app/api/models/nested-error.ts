/* tslint:disable */
import { ConflictError } from './conflict-error';
import { Error } from './error';
import { ForbiddenError } from './forbidden-error';
import { InputError } from './input-error';
import { NotFoundError } from './not-found-error';
import { UnauthorizedError } from './unauthorized-error';

/**
 * Error when an operation may generate another error for a specific property. An example of this is when saving the full profile, which can have an error in the basic fields, or in the n-th new land-line phone, or in the n-th removed image.
 */
export interface NestedError extends Error {

  /**
   * The nested error when `ConflictError`
   */
  conflictError?: ConflictError;

  /**
   * The nested error when `Error`
   */
  error?: Error;

  /**
   * The nested error when `ForbiddenError`
   */
  forbiddenError?: ForbiddenError;

  /**
   * If the property is indexed, contains the index with error
   */
  index?: number;

  /**
   * The nested error when `InputError`
   */
  inputError?: InputError;

  /**
   * The nested error when `NotFoundError`
   */
  notFoundError?: NotFoundError;

  /**
   * The property name that generated the error
   */
  property?: string;

  /**
   * The nested error when `UnauthorizedError`
   */
  unauthorizedError?: UnauthorizedError;
}
