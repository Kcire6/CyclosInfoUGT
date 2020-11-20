/* tslint:disable */
import { AccountWithOwner } from './account-with-owner';
import { Currency } from './currency';
import { Entity } from './entity';
import { TransferType } from './transfer-type';

/**
 * Common data for transfer and transaction
 */
export interface Trans extends Entity {

  /**
   * The transfer / transaction amount.
   */
  amount?: string;

  /**
   * The transfer / transaction currency.
   */
  currency?: Currency;

  /**
   * The creation date and time.
   */
  date?: string;

  /**
   * A display text for this transfer / transaction, according to the transaction type and currency configuration in Cyclos.
   */
  display?: string;

  /**
   * The debited account.
   */
  from?: AccountWithOwner;

  /**
   * The credited account.
   */
  to?: AccountWithOwner;

  /**
   * The transaction number identifying this transfer / transaction. The currency configuration has the definition on whether transaction numbers are enabled and which format they have.
   */
  transactionNumber?: string;

  /**
   * WARNING: Currently this object contains both `from` and `to` account types. Starting with Cyclos 4.15 they won't be returned, anymore, as the account types are already returned in the `from` / `to` accounts.
   */
  type?: TransferType;
}
