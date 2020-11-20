/* tslint:disable */
import { Brokering } from './brokering';
import { BrokeringLog } from './brokering-log';
import { User } from './user';

/**
 * Contains the current user brokers, as well as other information
 */
export interface UserBrokersData {

  /**
   * Brokers currently assigned, together with additional information
   */
  brokers?: Array<Brokering>;

  /**
   * Can the authenticated user manage brokers of this user?
   */
  editable?: boolean;

  /**
   * Contains the history entries for all brokering changes
   */
  history?: Array<BrokeringLog>;
  user?: User;
}
