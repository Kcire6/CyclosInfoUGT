/* tslint:disable */

/**
 * Determines which address is returned on the search, if any. By default no addresses are returned. This option is useful for displaying results as locations on a map. In all cases only located addresses (those that have the geographical coordinates set) are returned. When returning all addresses, data related with multiple addresses is returned multiple times.
 * Possible values are:
 * - `all`: All addresses are returned.
 * - `nearest`: The nearest address from the reference location is returned. Only usable if a reference coordinate (`latitude` and `longitude`)
 * - `none`: Addresses are not returned.
 * - `primary`: The primary (default) user address is returned
 */
export enum UserAddressResultEnum {
  ALL = 'all',
  NEAREST = 'nearest',
  NONE = 'none',
  PRIMARY = 'primary'
}
