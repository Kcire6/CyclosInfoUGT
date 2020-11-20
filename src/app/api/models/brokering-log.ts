/* tslint:disable */
import { BrokeringActionEnum } from './brokering-action-enum';
import { User } from './user';
export interface BrokeringLog {
  action?: BrokeringActionEnum;

  /**
   * The broker
   */
  broker?: User;

  /**
   * The user that performed the action
   */
  by?: User;

  /**
   * The action date
   */
  date?: string;
}
