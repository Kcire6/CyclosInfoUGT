/* tslint:disable */
import { DecimalRange } from './decimal-range';
import { OperatorGroupAccountAccessEnum } from './operator-group-account-access-enum';

/**
 * Settings for an account access for an operator group
 */
export interface OperatorGroupAccount {
  access?: OperatorGroupAccountAccessEnum;

  /**
   * The minimum / maximum amount for payment notifications to be sent
   */
  notificationAmount?: DecimalRange;
}
