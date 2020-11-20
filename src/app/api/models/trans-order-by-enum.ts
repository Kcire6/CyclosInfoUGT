/* tslint:disable */

/**
 * Contains the possible 'order by' values when searching for transfers / transactions
 * Possible values are:
 * - `amountAsc`: The result is ordered by amount descendant
 * - `amountDesc`: The result is ordered by amount descendant
 * - `dateAsc`: The result is ordered by date ascendant
 * - `dateDesc`: The result is ordered by date descendant
 */
export enum TransOrderByEnum {
  AMOUNT_ASC = 'amountAsc',
  AMOUNT_DESC = 'amountDesc',
  DATE_ASC = 'dateAsc',
  DATE_DESC = 'dateDesc'
}
