/* tslint:disable */

/**
 * Represents a range of minimum / maximum integer values (both optional). In general if both values are null the entire range is returned as null.
 */
export interface IntegerRange {

  /**
   * The maximum value
   */
  max?: number;

  /**
   * The minimum value
   */
  min?: number;
}
