/* tslint:disable */

/**
 * Indicates whether from an account POV a transfer is a credit or debit
 * Possible values are:
 * - `credit`: The transfer impacts the balance positively
 * - `debit`: The transfer impacts the balance negatively
 */
export enum TransferDirectionEnum {
  CREDIT = 'credit',
  DEBIT = 'debit'
}
