/* tslint:disable */
import { DatePeriod } from './date-period';

/**
 * Statistics for received or given references in a given period
 */
export interface ReferencePeriodStatistics {

  /**
   * References count per level.
   */
  counts?: { [key: string]: number };

  /**
   * The date period ranges. Null when the results are for all time.
   */
  period?: DatePeriod;

  /**
   * The score is a value from 1 to 5 which contains the average score when counting all levels. Each reference level has a score:
   *
   * - `veryBad`: 1;
   * - `bad`: 2;
   * - `neutral`: 3;
   * - `good`: 4;
   * - `veryGood`: 5.
   *
   * The score will be 0 when there are no references.
   */
  score?: number;

  /**
   * The total number of accounted references.
   */
  total?: number;

  /**
   * The total number of accounted `bad` or `veryBad` references.
   */
  totalNegative?: number;

  /**
   * The total number of accounted `good` or `veryGood` references.
   */
  totalPositive?: number;
}
