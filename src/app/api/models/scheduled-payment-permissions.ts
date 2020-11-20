/* tslint:disable */

/**
 * Permissions the user has over a scheduled payment
 */
export interface ScheduledPaymentPermissions {

  /**
   * Can block the whole scheduled payment?
   */
  block?: boolean;

  /**
   * Can cancel the whole scheduled payment?
   */
  cancel?: boolean;

  /**
   * Can settle open installments?
   */
  settle?: boolean;

  /**
   * Can unblock the whole scheduled payment?
   */
  unblock?: boolean;
}
