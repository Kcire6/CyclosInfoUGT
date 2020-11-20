/* tslint:disable */
import { ReferencePeriodStatistics } from './reference-period-statistics';
import { User } from './user';

/**
 * Statistics for received or given references
 */
export interface ReferenceStatistics {

  /**
   * For each requested period, contains corresponding statistics
   */
  periods?: Array<ReferencePeriodStatistics>;
  user?: User;
}
