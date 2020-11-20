/* tslint:disable */
import { ErrorKind } from './error-kind';

/**
 * An error that happened during the request processing
 */
export interface Error {

  /**
   * The server exception message. Not intended to be shown to final users. Only for logging purposes.
   */
  exceptionMessage?: string;

  /**
   * The server exception class name. Not intended to be shown to final users. Only for logging purposes.
   */
  exceptionType: string;
  kind?: ErrorKind;
}
