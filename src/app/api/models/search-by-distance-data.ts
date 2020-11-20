/* tslint:disable */
import { Address } from './address';
import { DistanceUnitEnum } from './distance-unit-enum';

/**
 * Contains configuration information for searching data by distance
 */
export interface SearchByDistanceData {

  /**
   * The list of addresses owned by the authenticated user
   */
  addresses?: Array<Address>;

  /**
   * The default values, keyed by field name, for address fields
   */
  defaultValues?: { [key: string]: string };
  distanceUnit?: DistanceUnitEnum;
}
