/* tslint:disable */
import { DecimalRange } from './decimal-range';

/**
 * Settings regarding notifications for a given account
 */
export interface AccountNotificationSettings {

  /**
   * The minimum / maximum amount for payment notifications to be sent
   */
  paymentAmount?: DecimalRange;
}
