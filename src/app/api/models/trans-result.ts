/* tslint:disable */
import { Entity } from './entity';
import { TransferType } from './transfer-type';

/**
 * Base fields for results of both transfers and transactions
 */
export interface TransResult extends Entity {

  /**
   * The transaction amount.
   */
  amount?: string;

  /**
   * The transaction date and time.
   */
  date?: string;

  /**
   * The transaction description. Is optional.
   */
  description?: string;

  /**
   * The transaction number identifying this balance transfer. The currency configuration has the definition on whether transaction numbers are enabled and which format they have.
   */
  transactionNumber?: string;

  /**
   * WARNING: Currently this object contains both `from` and `to` account types. Starting with Cyclos 4.15 they won't be returned, the account types are already returned in the accounts.
   */
  type?: TransferType;
}
