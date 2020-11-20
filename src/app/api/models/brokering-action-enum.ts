/* tslint:disable */

/**
 * An action over a user's brokers
 * Possible values are:
 * - `add`: The broker was added
 * - `remove`: The broker was removed
 * - `setMain`: The broker was set as main
 */
export enum BrokeringActionEnum {
  ADD = 'add',
  REMOVE = 'remove',
  SET_MAIN = 'setMain'
}
