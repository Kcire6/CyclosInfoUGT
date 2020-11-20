/* tslint:disable */

/**
 * Contains the possible balance levels on the users with balances search
 * Possible values are:
 * - `high`: High balance, above the medium balance range upper bound
 * - `low`: Low balance, below the medium balance range lower bound
 * - `medium`: Medium balance, between the lower and upper bounds of the medium balance range
 */
export enum BalanceLevelEnum {
  HIGH = 'high',
  LOW = 'low',
  MEDIUM = 'medium'
}
