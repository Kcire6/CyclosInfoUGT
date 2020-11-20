/* tslint:disable */
import { Brokering } from './brokering';
import { User } from './user';

/**
 * Details of a brokering relationship
 */
export interface BrokeringView extends Brokering {

  /**
   * The user
   */
  user?: User;
}
