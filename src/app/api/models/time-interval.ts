/* tslint:disable */
import { TimeFieldEnum } from './time-field-enum';

/**
 * Represents a time interval such as 1 month, 3 weeks, 12 months, etc.
 */
export interface TimeInterval {

  /**
   * The amount of time units
   */
  amount?: number;
  field?: TimeFieldEnum;
}
