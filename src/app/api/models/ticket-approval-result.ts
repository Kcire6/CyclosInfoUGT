/* tslint:disable */
import { Entity } from './entity';
import { TicketStatusEnum } from './ticket-status-enum';
import { Transaction } from './transaction';

/**
 * Ticket approval result.
 */
export interface TicketApprovalResult extends Entity {

  /**
   * The URL to redirect when canceling the accept ticket flow
   */
  cancelUrl?: string;

  /**
   * The URL to redirect after successfully accepting a ticket
   */
  successUrl?: string;

  /**
   * The ticket number identifier.
   */
  ticketNumber?: string;
  ticketStatus?: TicketStatusEnum;

  /**
   * The generated payment. Only if `status` is `processed`.
   */
  transaction?: Transaction;
}
