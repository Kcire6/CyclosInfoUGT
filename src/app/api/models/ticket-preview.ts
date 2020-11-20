/* tslint:disable */
import { PaymentPreview } from './payment-preview';

/**
 * null
 */
export interface TicketPreview extends PaymentPreview {

  /**
   * The URL to redirect when canceling the accept ticket flow
   */
  cancelUrl?: string;

  /**
   * The URL to redirect after successfully accepting a ticket
   */
  successUrl?: string;
}
