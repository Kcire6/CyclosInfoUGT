/* tslint:disable */
import { Entity } from './entity';
import { Transaction } from './transaction';

/**
 * Ticket process result.
 */
export interface TicketProcessResult extends Entity {

  /**
   * Flag indicating if the ticket was processed by this invocation or the ticket was already processed in a previous invocation. This will only  be true for the first invocation of the `process` service method.
   */
  actuallyProcessed?: boolean;

  /**
   * The ticket number identifier.
   */
  ticketNumber?: string;

  /**
   * The generated payment.
   */
  transaction?: Transaction;
}
