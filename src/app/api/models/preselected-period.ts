/* tslint:disable */

/**
 * Represents a pre-calculated date period
 */
export interface PreselectedPeriod {

  /**
   * The period begin date
   */
  begin?: string;

  /**
   * Indicates whether this period should be pre-selected
   */
  defaultOption?: boolean;

  /**
   * The period begin date
   */
  end?: string;

  /**
   * The period display name
   */
  name?: string;
}
