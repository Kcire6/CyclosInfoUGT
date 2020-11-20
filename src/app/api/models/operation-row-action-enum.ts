/* tslint:disable */

/**
 * The action that should be performed when the user clicks a row in the results table
 * Possible values are:
 * - `location`: Navigate to a standard Cyclos location
 * - `operation`: Run an internal custom operation, which is set on the custom operation itself
 * - `url`: Navigate to an arbitrary URL, which is set in the custom operation itself
 */
export enum OperationRowActionEnum {
  LOCATION = 'location',
  OPERATION = 'operation',
  URL = 'url'
}
