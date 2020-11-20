/* tslint:disable */

/**
 * Contains the possible 'order by' values when searching for users with balances
 * Possible values are:
 * - `alphabeticallyAsc`: Users are ordered by name (or whatever field is set to format users) in ascending order.
 * - `alphabeticallyDesc`: Users are ordered by name (or whatever field is set to format users) in descending order.
 * - `balanceAsc`: User are ordered by balance, lower balances first.
 * - `balanceDesc`: User are ordered by balance, higher balances first.
 */
export enum UsersWithBalanceOrderByEnum {
  ALPHABETICALLY_ASC = 'alphabeticallyAsc',
  ALPHABETICALLY_DESC = 'alphabeticallyDesc',
  BALANCE_ASC = 'balanceAsc',
  BALANCE_DESC = 'balanceDesc'
}
