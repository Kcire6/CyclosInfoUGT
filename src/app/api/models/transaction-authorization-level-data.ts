/* tslint:disable */
import { User } from './user';

/**
 * Contains detailed data of a payment's authorization level.
 */
export interface TransactionAuthorizationLevelData {

  /**
   * Indicates that an administrator can authorize this level.
   */
  allowAdmin?: boolean;

  /**
   * Indicates that any of the payer's brokers can authorize this level.
   */
  allowBroker?: boolean;

  /**
   * Indicates that the payer can authorize this level.
   */
  allowPayer?: boolean;

  /**
   * Indicates that the payer can authorize this level.
   */
  allowReceiver?: boolean;

  /**
   * Contains the brokers that can authorize this level.
   */
  brokers?: Array<User>;
}
