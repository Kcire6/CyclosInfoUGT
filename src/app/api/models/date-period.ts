/* tslint:disable */

/**
 * A period comprised of a begin and an end date
 */
export interface DatePeriod {

  /**
   * The period begin date, if any. Generally a period without a begin date can be seen as since all time.
   */
  begin?: string;

  /**
   * The period end date, if any. Generally a period without an end date can be seen as without a limit.
   */
  end?: string;
}
