/* tslint:disable */
import { ScheduledPaymentPermissions } from './scheduled-payment-permissions';

/**
 * Permissions over own scheduled payments
 */
export interface ScheduledPaymentsPermissions extends ScheduledPaymentPermissions {

  /**
   * Can process installments?
   */
  process?: boolean;

  /**
   * Can view own scheduled payments?
   */
  view?: boolean;
}
