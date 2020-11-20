/* tslint:disable */
import { Group } from './group';
import { User } from './user';

/**
 * Data for adding a new broker to a user.
 */
export interface BrokerDataForAdd {

  /**
   * The broker groups that can be used when searching for the new broker
   */
  brokerGroups?: Array<Group>;

  /**
   * The current user's brokers
   */
  brokers?: Array<User>;

  /**
   * The user
   */
  user?: User;
}
