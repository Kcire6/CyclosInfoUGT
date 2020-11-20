/* tslint:disable */
import { AccountWithOwner } from './account-with-owner';
import { TransResult } from './trans-result';
import { Transaction } from './transaction';

/**
 * Represents a balance transfer between accounts, as viewed from the point-of-view account of a a specific account. This means that credits will have a positive amount, while debits will be negative.
 */
export interface AccountHistoryResult extends TransResult {

  /**
   * Holds the custom field values, keyed by field internal name or id. The format of the value depends on the custom field type. In order to lookup the custom fields, use the `GET /{owner}/accounts/{accountType}/data-for-history` operation, and lookup each field by either internal name (if configured) or id. Example: `{..., "customValues": {"linkedAccount": "123456789"}}`
   */
  customValues?: { [key: string]: string };

  /**
   * The account that either received / sent the balance
   */
  relatedAccount?: AccountWithOwner;

  /**
   * Contains an optional custom from / to name, which can be set when the transaction is performed.
   */
  relatedName?: string;

  /**
   * contains the current status internal name or id, keyed by the flow internal name or id
   */
  statuses?: { [key: string]: string };

  /**
   * If this balance transfer was originated from a transaction (like a payment or scheduled payment), contains the a simple reference to this transaction.
   * WARNING: The only fields that will be filled-in are `id`, `transactionNumber` and `kind`.
   */
  transaction?: Transaction;
}
