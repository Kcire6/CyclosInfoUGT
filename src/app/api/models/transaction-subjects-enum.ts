/* tslint:disable */

/**
 * Reference to none, one of (from or to) or both subjects of a transaction (or transfer)
 * Possible values are:
 * - `both`: Reference to both from and to subjects of the transaction
 * - `from`: Reference to the transaction from
 * - `none`: Reference to none of the transaction subjects
 * - `to`: Reference to the transaction to
 */
export enum TransactionSubjectsEnum {
  BOTH = 'both',
  FROM = 'from',
  NONE = 'none',
  TO = 'to'
}
