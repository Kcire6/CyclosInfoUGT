/* tslint:disable */

/**
 * Represents a range of minimum / maximum decimal values (both optional). In general if both values are null the entire range is returned as null.
 */
export interface DecimalRange {

  /**
   * The maximum value
   */
  max?: string;

  /**
   * The minimum value
   */
  min?: string;
}
