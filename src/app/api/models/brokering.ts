/* tslint:disable */
import { User } from './user';

/**
 * A brokering relationship with a specific broker
 */
export interface Brokering {

  /**
   * The broker user
   */
  broker?: User;

  /**
   * Indicates if this is the user's main broker
   */
  main?: boolean;

  /**
   * The date the brokering relation started
   */
  since?: string;
}
