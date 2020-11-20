/* tslint:disable */
import { PaymentRequestPermissions } from './payment-request-permissions';

/**
 * Permissions over own payment requests
 */
export interface PaymentRequestsPermissions extends PaymentRequestPermissions {

  /**
   * Can the authenticated user send payment requests to system accounts?
   */
  sendToSystem?: boolean;

  /**
   * Can the authenticated user send payment requests to users?
   */
  sendToUser?: boolean;

  /**
   * Can view payment requests?
   */
  view?: boolean;
}
