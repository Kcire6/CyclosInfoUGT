/* tslint:disable */
import { User } from './user';

/**
 * Contains data about a brokerage relationship
 */
export interface BrokerView {

  /**
   * The broker user.
   */
  broker?: User;

  /**
   * Indicates whether this broker is the main or not.
   */
  mainBroker?: boolean;

  /**
   * Indicates when the brokerage relationship began.
   */
  since?: string;
}
