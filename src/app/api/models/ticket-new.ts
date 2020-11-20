/* tslint:disable */
import { PerformBaseTransaction } from './perform-base-transaction';
import { TimeInterval } from './time-interval';

/**
 * Contain the information to create a new ticket for the logged user
 */
export interface TicketNew extends PerformBaseTransaction {

  /**
   * The url to redirect when canceling the approve ticket flow. If an `orderId` is given then it will be added as a query parameter to this url when redirect as well as the ticket number too.
   */
  cancelUrl?: string;

  /**
   * Defines the expiration interval. If none is given, it is assumed that the ticket expires in one day.
   */
  expiresAfter?: TimeInterval;

  /**
   * An optional order identifier given by the ticket's creator. If given  then that identifier will be used at ticket processing to ensure the  ticket is for that order. This attribute is usefull in case the client doesn't want to reflect  the generated ticket number in its database after creating the ticket,
   */
  orderId?: string;

  /**
   * An identification for the user which will pay the ticket. Is optional, and in most cases, should be left empty. If empty, at the moment the client will pay the ticket, both user identification and password will be entered, and the ticket will be confirmed. If specified, when confirming, only that user will be able to pay the ticket.
   */
  payer?: string;

  /**
   * The url to redirect after successful approving a ticket.  If an `orderId` is given then it will be added as a query parameter to this url when redirect as well as the ticket number too.
   */
  successUrl?: string;

  /**
   * The url to be invoked by the server after successfully approving a  ticket. If an `orderId` is given then it will be added as a query parameter to this url when redirect as well as the ticket number too.
   */
  successWebhook?: string;
}
